import assert from 'assert';

import {
  readFile,
  readJSON,
  TodoError,
} from '../src/helper';
import {
  CoverSet,
  Coverage,
} from '../src/coverage';

interface ExpectedCoverSet {
  total: number;
  covered: Set<number>;
}

interface ExpectedCoverage {
  func: ExpectedCoverSet;
  stmt: ExpectedCoverSet;
  branch: ExpectedCoverSet;
}

const expectedMap: {
  [name: string]: ExpectedCoverage;
} = {
  "branch": {
    func: {
      total: 4,
      covered: new Set([0, 1, 2, 3]),
    },
    stmt: {
      total: 17,
      covered: new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16]),
    },
    branch: {
      total: 31,
      covered: new Set([0, 2, 3, 4, 6, 8, 15, 16, 17, 18, 20, 27, 30]),
    },
  },
  "class": {
    func: {
      total: 5,
      covered: new Set([0, 1, 2, 3, 4]),
    },
    stmt: {
      total: 7,
      covered: new Set([0, 1, 2, 3, 4, 5, 6]),
    },
    branch: {
      total: 4,
      covered: new Set([1, 3]),
    },
  },
  "computed": {
    func: {
      total: 2,
      covered: new Set([0, 1]),
    },
    stmt: {
      total: 9,
      covered: new Set([0, 1, 2, 3, 4, 5, 7, 8]),
    },
    branch: {
      total: 10,
      covered: new Set([1, 2, 5, 7, 9]),
    },
  },
  "func": {
    func: {
      total: 6,
      covered: new Set([0, 1, 2, 4]),
    },
    stmt: {
      total: 9,
      covered: new Set([0, 1, 2, 3, 5, 7, 8]),
    },
    branch: {
      total: 2,
      covered: new Set([0, 1]),
    },
  },
  "label": {
    func: {
      total: 1,
      covered: new Set([0]),
    },
    stmt: {
      total: 7,
      covered: new Set([0, 1, 2, 3, 4, 5, 6]),
    },
    branch: {
      total: 2,
      covered: new Set([0, 1]),
    },
  },
  "loop": {
    func: {
      total: 6,
      covered: new Set([0, 1, 2, 3, 4, 5]),
    },
    stmt: {
      total: 25,
      covered: new Set([
        0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ]),
    },
    branch: {
      total: 0,
      covered: new Set([]),
    },
  },
  "sort": {
    func: {
      total: 1,
      covered: new Set([0]),
    },
    stmt: {
      total: 12,
      covered: new Set([0, 1, 2, 3, 4, 5, 7, 11]),
    },
    branch: {
      total: 4,
      covered: new Set([1, 3]),
    },
  },
  "switch": {
    func: {
      total: 1,
      covered: new Set([0]),
    },
    stmt: {
      total: 14,
      covered: new Set([0, 1, 7, 12, 13]),
    },
    branch: {
      total: 13,
      covered: new Set([0, 11, 12, 6]),
    },
  },
  "underscore": {
    func: {
      total: 185,
      covered: new Set([
        0, 1, 2, 3, 8, 9, 10, 13, 19, 20, 21, 22, 28, 38, 43, 44, 45, 46, 51,
        63, 78, 89, 93, 117, 120, 121, 124, 126, 134, 141, 149, 156, 166, 178,
        179, 181, 183,
      ]),
    },
    stmt: {
      total: 982,
      covered: new Set([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 29, 36, 37, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 66, 67, 68,
        71, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 107, 109, 110, 140, 141,
        143, 144, 147, 219, 221, 222, 223, 224, 226, 239, 240, 241, 242, 243,
        244, 245, 246, 247, 248, 249, 264, 265, 266, 267, 268, 269, 270, 271,
        272, 273, 274, 275, 276, 277, 278, 280, 282, 283, 284, 285, 286, 287,
        288, 289, 290, 291, 292, 293, 294, 295, 310, 312, 316, 343, 344, 362,
        389, 391, 393, 394, 395, 396, 399, 400, 401, 402, 403, 404, 405, 406,
        408, 453, 466, 467, 468, 478, 479, 480, 486, 487, 488, 489, 490, 492,
        493, 494, 495, 496, 497, 498, 499, 500, 505, 506, 507, 508, 525, 528,
        603, 612, 620, 621, 632, 633, 634, 635, 636, 637, 642, 645, 646, 647,
        649, 650, 656, 657, 658, 659, 663, 673, 684, 687, 688, 714, 716, 717,
        718, 719, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 769, 770,
        808, 815, 819, 821, 825, 827, 829, 831, 851, 874, 875, 879, 905, 927,
        956, 957, 958, 962, 963, 964, 965, 972, 973, 974, 979, 980, 981,
      ]),
    },
    branch: {
      total: 639,
      covered: new Set([
        0, 3, 4, 5, 8, 10, 11, 12, 15, 17, 18, 19, 25, 27, 28, 29, 30, 31, 32,
        34, 35, 36, 37, 38, 43, 44, 49, 55, 56, 57, 59, 66, 81, 82, 195, 197,
        207, 209, 211, 212, 213, 215, 216, 217, 219, 220, 222, 231, 233, 244,
        265, 311, 312, 313, 314, 315, 316, 318, 319, 320, 322, 323, 325, 326,
        382, 383, 384, 400, 401, 403, 404, 405, 406, 413, 454, 455, 457, 488,
        492, 493, 495, 496, 497, 498, 538, 539,
      ]),
    },
  },
}

function checkCovered(
  name: string,
  target: string,
  field: 'func' | 'stmt' | 'branch',
) {
  it(`should return the correct ${target} coverage`, () => {
    try {
      const cov = getCoverage(name);
      const { func, stmt, branch } = cov;
      const expected = expectedMap[name];
      const coverSet = cov[field];
      const expected = expected[field];
      assert.equal(coverSet.total, expected.total);
      assert.deepEqual(coverSet.covered, expected.covered);
    } catch(e) {
      if (typeof e === 'string') assert.fail(e);
      else throw e;
    }
  });
}

const cache: { [name: string]: Coverage } = {};
function getCoverage(name: string) {
  if (cache[name]) return cache[name];
  const code = readFile(`example/${name}.js`);
  const inputs = readJSON(`example/${name}.json`);
  const cov: Coverage = new Coverage(code);
  cov.run(inputs);
  return cache[name] = cov;
}


function check(name: string) {
  describe(`${name}.js`, () => {
    checkCovered(name, 'function', 'func');
    checkCovered(name, 'statement', 'stmt');
    checkCovered(name, 'branch', 'branch');
  });
}

describe('coverage', () => {
  for (const name in expectedMap) {
    check(name);
  }
});
