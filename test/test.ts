import assert from 'assert';
import fs from 'fs';

import { readFile, readJSON } from '../src/helper';
import { Coverage, CoverSet } from '../src/coverage';

// Expected coverage of one kind (function / statement / branch), stored in
// `example/<name>.expected.json`. Test requirements are identified by their
// source range (`line:col-line:col`), so the numbering of ids does not matter.
interface ExpectedCoverSet {
  total: number;      // number of test requirements
  targets: string[];  // source range of every test requirement
  covered: string[];  // source range of every covered test requirement
}

interface ExpectedCoverage {
  func: ExpectedCoverSet;
  stmt: ExpectedCoverSet;
  branch: ExpectedCoverSet;
}

type Kind = 'func' | 'stmt' | 'branch';
const kindName: { [k in Kind]: string } = {
  func: 'function',
  stmt: 'statement',
  branch: 'branch',
};

// Every `example/<name>.js` that has an input file and an expected file
const names = fs
  .readdirSync('example')
  .filter(f => f.endsWith('.js') && !f.endsWith('.out.js'))
  .map(f => f.slice(0, -3))
  .filter(n => fs.existsSync(`example/${n}.json`))
  .filter(n => fs.existsSync(`example/${n}.expected.json`))
  .sort();

// Run the coverage profiler once per example
const cache: { [name: string]: Coverage } = {};
function getCoverage(name: string): Coverage {
  if (cache[name]) return cache[name];
  const code = readFile(`example/${name}.js`);
  const inputs = readJSON(`example/${name}.json`);
  const cov = new Coverage(code);
  cov.run(inputs);
  return cache[name] = cov;
}

// Source ranges of all / covered test requirements, sorted
function ranges(set: CoverSet, onlyCovered: boolean): string[] {
  return Object.keys(set.target)
    .map(Number)
    .filter(id => !onlyCovered || set.covered.has(id))
    .map(id => set.target[id].toString())
    .sort();
}

function checkCovered(name: string, kind: Kind) {
  it(`should return the correct ${kindName[kind]} coverage`, () => {
    try {
      const cov = getCoverage(name);
      const expected: ExpectedCoverage = readJSON(`example/${name}.expected.json`);
      const actual = cov[kind];
      const exp = expected[kind];
      assert.equal(actual.total, exp.total, 'number of test requirements');
      assert.deepEqual(ranges(actual, false), [...exp.targets].sort(), 'test requirements');
      assert.deepEqual(ranges(actual, true), [...exp.covered].sort(), 'covered test requirements');
    } catch (e) {
      if (typeof e === 'string') assert.fail(e);
      else throw e;
    }
  });
}

describe('coverage', () => {
  for (const name of names) {
    describe(`${name}.js`, () => {
      checkCovered(name, 'func');
      checkCovered(name, 'stmt');
      checkCovered(name, 'branch');
    });
  }
});

// The printed report. Ids are stripped and detail lines sorted before the
// comparison, so only the format and the ranges are checked -- not the order
// in which ids were issued.
function normalizeReport(report: string): string[] {
  return report
    .split('\n')
    .map(line => line.replace(/^(\s+[* ] )\d+: /, '$1'))
    .sort();
}

describe('report', () => {
  it('should print the coverage report in the documented format', () => {
    try {
      const actual = getCoverage('sort').toString(false, true);
      const expected = [
      'Coverage:',
      '- func: 1/1 (100.00%)',
      '      * 0: 1:0-16:2',
      '- stmt: 8/12 (66.67%)',
      '      * 0: 2:3-14:4',
      '      * 1: 2:16-2:17',
      '      * 2: 3:15-3:16',
      '      * 3: 4:5-8:6',
      '      * 4: 4:18-4:23',
      '      * 5: 5:7-7:8',
      '        6: 6:9-6:17',
      '      * 7: 9:5-13:6',
      '        8: 10:17-10:25',
      '        9: 11:7-11:29',
      '        10: 12:7-12:24',
      '      * 11: 15:3-15:16',
      '- branch: 2/4 (50.00%)',
      '        0: 5:34-7:8',
      '      * 1: 7:8-7:8',
      '        2: 9:20-13:6',
      '      * 3: 13:6-13:6'
      ].join('\n');
      assert.deepEqual(normalizeReport(actual), normalizeReport(expected));
    } catch (e) {
      if (typeof e === 'string') assert.fail(e);
      else throw e;
    }
  });
});
