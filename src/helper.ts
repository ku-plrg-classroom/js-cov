import chalk from 'chalk';
import inspect from 'object-inspect';

import acorn from 'acorn';
import {
  BlockStatement,
  Expression,
  ExpressionStatement,
  Function,
  Node,
  Program,
  ReturnStatement,
  SequenceExpression,
  Statement,
} from 'acorn';

import fs from 'fs';

enum LogLevel {
  LOG,
  WARN,
  ERROR,
}

export const scriptName = './js-cov';

// Read the file
export function readFile(path: string): string {
  if (!fs.existsSync(path)) err(`File not found: \`${path}\`.`);
  return fs.readFileSync(path, 'utf-8').toString().trim();
}

// Write the file
export function writeFile(path: string, content: string): void {
  fs.writeFileSync(path, content);
}

export function getArgs(cmd: string, argv: any, expected: number): string[] {
  if (argv._.length - 1 != expected) {
    err(`Exactly ${expected} arguments are required for \`${cmd}\`.`);
  }
  return argv._.slice(1);
}

// Read the JSON file
export function readJSON(path: string): any {
  return JSON.parse(readFile(path));
}

// Get the string representation of a value
export function getString(value: any): string {
  if (typeof value === 'string') return value;
  if (value.hasOwnProperty('toString')) return value.toString();
  return inspect(value, { depth: 3 });
}

// Log a message
export function log(
  value: any,
  level: LogLevel = LogLevel.LOG,
  header: string = 'INFO',
  color: (msg: string) => string = chalk.white
) {
  let print;
  switch (level) {
    case LogLevel.LOG:
      print = console.log;
      break;
    case LogLevel.WARN:
      print = console.warn;
      break;
    case LogLevel.ERROR:
      print = (msg: string) => { throw msg; };
      break;
  }
  const msg = color(`[${header.padEnd(5, ' ')}] ${getString(value)}`);
  if (level === LogLevel.ERROR) throw msg;
  else print(msg);
}

// Warning message
export function warn(value: any) {
  log(value, LogLevel.WARN, 'WARN', chalk.yellow);
}

// Error message
export function err(value: any) {
  log(value, LogLevel.ERROR, 'ERROR', chalk.red);
}

// To-do message
export function todo(msg: string = '') {
  log(msg, LogLevel.ERROR, 'TODO', chalk.red);
}

// Cursor in the code
export class Cursor {
  index: number;
  line: number;
  col: number;
  constructor(code: string, index: number) {
    const lines = code.substring(0, index).split('\n');
    this.index = index;
    this.line = lines.length;
    this.col = index - lines.slice(0, -1).join('\n').length;
  }
  toString = (): string => `${this.line}:${this.col}`;
}

// Range of code
export class Range {
  start: Cursor;
  end: Cursor;
  constructor(start: Cursor, end: Cursor) {
    this.start = start;
    this.end = end;
  }
  static fromCode(code: string, start: number, end: number): Range {
    return new Range(new Cursor(code, start), new Cursor(code, end));
  }
  static fromNode(code: string, node: Node): Range {
    return Range.fromCode(code, node.start, node.end);
  }

  toString = (): string => `${this.start.toString()}-${this.end.toString()}`;
}

// Parse the string into an AST
export function parse(code: string): Program {
  return acorn.parse(code, {ecmaVersion: 2023});
}

// Create a new expression node
export function createExpr(code: string): Expression {
  return acorn.parseExpressionAt(code, 0, {ecmaVersion: 2023});
}

// Create a sequence expression nodes
export function createSeqExpr(exprs: Expression[]): SequenceExpression {
  let start = exprs.length > 0 ? exprs[0].start : -1;
  let end = exprs.length > 0 ? exprs[exprs.length - 1].end : -1;
  return { type: 'SequenceExpression', expressions: exprs, start, end };
}

// Create a new function node
export function createBlockStmt(stmts: Statement[]): BlockStatement {
  let start = stmts.length > 0 ? stmts[0].start : -1;
  let end = stmts.length > 0 ? stmts[stmts.length - 1].end : -1;
  return { type: 'BlockStatement', body: stmts, start, end };
}

// Convert a statement to a block statement
export function toBlockStmt(stmt: Statement): BlockStatement {
  if (stmt.type === 'BlockStatement') return stmt;
  return createBlockStmt([stmt]);
}

// Create a new statement node
export function createReturnStmt(argument: Expression): ReturnStatement {
  let { start, end } = argument;
  return { type: 'ReturnStatement', argument, start, end };
}

// Create a new statement node
export function createStmt(code: string): Statement {
  return parse(code).body[0] as Statement;
}

// Prepending a statement into a target statement
export function prependStmt(
  stmt: Statement,
  target: Statement | undefined | null
): BlockStatement {
  if (!target) return createBlockStmt([stmt]);
  if (target.type !== 'BlockStatement') return createBlockStmt([stmt, target]);
  target.body.unshift(stmt);
  return target;
}
