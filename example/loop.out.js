function loop(fname, arg) {
  __cov__.func.add(0);
  const funcs = (__cov__.stmt.add(0), {
    sum: x => {
      __cov__.func.add(1);
      let s = (__cov__.stmt.add(1), 0);
      __cov__.stmt.add(2);
      for (let i = (__cov__.stmt.add(3), 1); i <= x; i++) {
        __cov__.stmt.add(4);
        s += i;
      }
      __cov__.stmt.add(5);
      return s;
    },
    sumWhile: x => {
      __cov__.func.add(2);
      let s = (__cov__.stmt.add(6), 0);
      __cov__.stmt.add(7);
      while (x-- > 0) {
        __cov__.stmt.add(8);
        s += x;
      }
      __cov__.stmt.add(9);
      return s;
    },
    sumDoWhile: x => {
      __cov__.func.add(3);
      let s = (__cov__.stmt.add(10), 0);
      __cov__.stmt.add(11);
      do {
        __cov__.stmt.add(12);
        s += x;
      } while (x-- > 0);
      __cov__.stmt.add(13);
      return s;
    },
    sumForIn: obj => {
      __cov__.func.add(4);
      let s = (__cov__.stmt.add(14), 0);
      __cov__.stmt.add(15);
      for (let k in obj) {
        __cov__.stmt.add(16);
        s += obj[k];
      }
      __cov__.stmt.add(17);
      return s;
    },
    sumForOf: array => {
      __cov__.func.add(5);
      let s = (__cov__.stmt.add(18), 0);
      __cov__.stmt.add(19);
      for (let x of array) {
        __cov__.stmt.add(20);
        s += x;
      }
      __cov__.stmt.add(21);
      return s;
    }
  });
  __cov__.stmt.add(22);
  try {
    __cov__.stmt.add(23);
    return funcs[fname](arg);
  } catch (e) {
    __cov__.stmt.add(24);
    return null;
  }
}
