function loop(fname, arg) {
  const funcs = {
    // ForStatement
    sum: x => {
      let s = 0;
      for (let i = 1; i <= x; i++) s += i;
      return s;
    },
    // WhileStatement
    sumWhile: x => {
      let s = 0;
      while (x-- > 0) s += x;
      return s;
    },
    // DoWhileStatement
    sumDoWhile: x => {
      let s = 0;
      do s += x; while (x-- > 0);
      return s;
    },
    // ForInStatement
    sumForIn: obj => {
      let s = 0;
      for (let k in obj) s += obj[k];
      return s;
    },
    // ForOfStatement
    sumForOf: array => {
      let s = 0;
      for (let x of array) s += x;
      return s;
    },
  };
  try {
    return funcs[fname](arg);
  } catch (e) {
    return null;
  }
}
