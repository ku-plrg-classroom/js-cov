function branch(fname, arg) {
  __cov__.func.add(0);
  const funcs = (__cov__.stmt.add(0), {
    cond: x => {
      __cov__.func.add(1);
      let b = (__cov__.stmt.add(1), x < 0);
      __cov__.stmt.add(2);
      b = (__cov__.branch.add(0), b) && (__cov__.branch.add(1), b);
      __cov__.stmt.add(3);
      b = (__cov__.branch.add(2), b) || (__cov__.branch.add(3), b);
      __cov__.stmt.add(4);
      b = (__cov__.branch.add(4), b) ?? (__cov__.branch.add(5), b);
      __cov__.stmt.add(5);
      b = !b;
      __cov__.stmt.add(6);
      b = b ? (__cov__.branch.add(6), b) : (__cov__.branch.add(7), b);
      __cov__.stmt.add(7);
      b = (((__cov__.branch.add(8), b) || (__cov__.branch.add(9), b)) || (((__cov__.branch.add(10), b) && (__cov__.branch.add(11), b)) && ((__cov__.branch.add(12), b) ?? (__cov__.branch.add(13), b)))) ?? (__cov__.branch.add(14), !b);
      __cov__.stmt.add(8);
      b = (__cov__.branch.add(15), b) && (__cov__.branch.add(16), b) ? (__cov__.branch.add(17), (__cov__.branch.add(18), b) || (__cov__.branch.add(19), b) ? (__cov__.branch.add(20), b) : (__cov__.branch.add(21), b)) : (__cov__.branch.add(22), (__cov__.branch.add(23), b) ?? (__cov__.branch.add(24), b) ? (__cov__.branch.add(25), b) : (__cov__.branch.add(26), b));
      __cov__.stmt.add(9);
      b = b?.c;
    },
    abs: x => {
      __cov__.func.add(2);
      __cov__.stmt.add(10);
      if (x >= 0) {
        __cov__.branch.add(27);
        __cov__.stmt.add(11);
        return x;
      } else {
        __cov__.branch.add(28);
        __cov__.stmt.add(12);
        return -x;
      }
    },
    shortAbs: x => {
      __cov__.func.add(3);
      __cov__.stmt.add(13);
      return x >= 0 ? (__cov__.branch.add(29), x) : (__cov__.branch.add(30), -x);
    }
  });
  __cov__.stmt.add(14);
  try {
    __cov__.stmt.add(15);
    return funcs[fname](arg);
  } catch (e) {
    __cov__.stmt.add(16);
    return null;
  }
}
