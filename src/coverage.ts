import {
  Range,
  getString,
  log,
  warn,
  todo,
  parse,
  createExpr,
  createSeqExpr,
  createStmt,
  createBlockStmt,
  toBlockStmt,
  createReturnStmt,
  prependStmt,
} from './helper';

import dedent from 'dedent-js';

import acorn from 'acorn';
import {
  Node,
  Function,
  Statement,
  BlockStatement,
  LogicalExpression,
  VariableDeclaration,
  AssignmentPattern,
  SwitchStatement,
  IfStatement,
  ConditionalExpression,
  Expression,
} from 'acorn';
import walk from 'acorn-walk';

import { generate } from 'astring';

// Coverage target
interface CoverageTarget {
  [key: number]: Range;
}

// Covered set
export class CoverSet {
  covered: Set<number>;
  target: CoverageTarget;
  total: number;

  constructor(target: CoverageTarget) {
    this.covered = new Set();
    this.target = target;
    this.total = Object.keys(target).length;
  }

  // Add a covered id
  add = (id: number): void => {
    this.covered.add(id);
  }

  // Conversion to string
  toString = (
    showDetail: boolean = false,
    code: string | undefined = undefined,
  ): string => {
    const { covered, target, total } = this;
    const { size } = covered;
    const ratio = (size / total) * 100;
    const ids = Object.keys(target).map(Number);
    const sorted = Array.from(ids).sort((a, b) => a - b);
    let str = `${size}/${total} (${ratio.toFixed(2)}%)`;
    if (showDetail) {
      for (const id of sorted) {
        str += '\n' + ('      ') + (covered.has(id) ? '*' : ' ');
        const range = target[id];
        str += ` ${id}: ${target[id]}`;
        if (code) {
          const { start, end } = range;
          str += ' -- ' + code.substring(start.index, end.index);
        }
      }
    }
    return `${str}`;
  }
}

// Coverage of the code by statement and branch
export class Coverage {
  code: string;
  modified: string;
  runner?: () => void;
  func: CoverSet;
  stmt: CoverSet;
  branch: CoverSet;

  constructor(code: string) {
    // Parse the code
    let ast = parse(code);

    // Counters for functions, statements, and branches
    let fcount = 0, scount = 0, bcount = 0;

    // Coverage targets
    let funcTarget: CoverageTarget = {};
    let stmtTarget: CoverageTarget = {};
    let branchTarget: CoverageTarget = {};

    // Recursive visitor for the AST
    const visitor: walk.RecursiveVisitors<any> = {
      Function(func) {
        const { id, params, body } = func
        for (const param of params) { walk.recursive(param, null, visitor); }
        const fid = fcount++;
        funcTarget[fid] = Range.fromNode(code, func);
        const countStmt = createStmt(`__cov__.func.add(${fid});`)
        if (body.type === 'BlockStatement') {
          const blockStmt = body as BlockStatement;
          const stmts = blockStmt.body;
          blockStmt.body = walkStmts(stmts);
          blockStmt.body.unshift(countStmt);
        } else {
          todo("Function");
        }
      },
      VariableDeclaration(decl) { todo("VariableDeclaration"); },
      AssignmentPattern(pattern) { todo("AssignmentPattern"); },
      BlockStatement(node) {
        node.body = walkStmts(node.body);
      },
      SwitchStatement(stmt) { todo("SwitchStatement"); },
      StaticBlock(node) { todo("StaticBlock"); },
      IfStatement(stmt) { todo("IfStatement"); },
      ConditionalExpression(expr) { todo("ConditionalExpression"); },
      LogicalExpression(node) { todo("LogicalExpression"); },
      LabeledStatement(node) { todo("LabeledStatement"); },
      WhileStatement(node) { todo("WhileStatement"); },
      DoWhileStatement(node) { todo("DoWhileStatement"); },
      ForStatement(node) { todo("ForStatement"); },
      ForInStatement(node) { todo("ForInStatement"); },
      ForOfStatement(node) { todo("ForOfStatement"); },
    }

    // Instrument the sequence of statements
    function walkStmts(stmts: Statement[]): Statement[] {
      let newStmts = [];
      for (const stmt of stmts) {
        if (!stmt.type.endsWith('Declaration')) {
          const sid = scount++;
          stmtTarget[sid] = Range.fromNode(code, stmt);
          newStmts.push(createStmt(`__cov__.stmt.add(${sid});`));
        }
        newStmts.push(stmt);
        walk.recursive(stmt, null, visitor);
      }
      return newStmts;
    }

    // Recursively visit the AST
    walk.recursive(ast, null, visitor);

    // Fill the fields of the coverage object
    this.code = code;
    this.modified = generate(ast);
    this.func = new CoverSet(funcTarget);
    this.stmt = new CoverSet(stmtTarget);
    this.branch = new CoverSet(branchTarget);
    try {
      this.runner = eval(`(() => {
        const __cov__ = this;
        const orig = ${this.modified};
        function func() {
          try { return orig.apply(null, arguments); } catch (e) { }
        };
        return func;
      })();`);
    } catch(_) { warn('The given code is not runnable with arguments.'); }
  }

  // Run the instrumented code with the inputs
  run = (inputs: any[]): void => {
    for (const input of inputs) this.runSingle(input);
  }

  // Run the instrumented code with a single input
  runSingle = (input: any): void => {
    if (this.runner) this.runner.apply(null, input);
    else warn('The given code is not runnable with arguments.');
  }

  // Conversion to string
  toString = (
    showModified: boolean = false,
    showDetail: boolean = false,
  ): string => {
    const { code, func: f, stmt: s, branch: b } = this;
    let str: string = '';
    if (showModified) str += `Modified: ${this.modified}\n`;
    str += `Coverage:` + '\n';
    if (f.total > 0) str += `- func: ${f.toString(showDetail)}\n`;
    if (s.total > 0) str += `- stmt: ${s.toString(showDetail)}\n`;
    if (b.total > 0) str += `- branch: ${b.toString(showDetail)}\n`;
    return str.trim();
  }
}
