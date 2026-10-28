function logical(a, b, c) {
  __cov__.func.add(0);
  let r = (__cov__.stmt.add(0), (__cov__.branch.add(0), a) && (__cov__.branch.add(1), b));
  __cov__.stmt.add(1);
  r = (__cov__.branch.add(2), a) || (__cov__.branch.add(3), b);
  __cov__.stmt.add(2);
  r = (__cov__.branch.add(4), a) ?? (__cov__.branch.add(5), b);
  __cov__.stmt.add(3);
  r = (__cov__.branch.add(6), a) && (__cov__.branch.add(7), b) || ((__cov__.branch.add(8), c) ?? (__cov__.branch.add(9), a));
  __cov__.stmt.add(4);
  r = a ? (__cov__.branch.add(10), (__cov__.branch.add(11), b) && (__cov__.branch.add(12), c)) : (__cov__.branch.add(13), (__cov__.branch.add(14), b) || (__cov__.branch.add(15), c));
  __cov__.stmt.add(5);
  r = (__cov__.branch.add(16), a) || (__cov__.branch.add(17), b) ? (__cov__.branch.add(18), c) : (__cov__.branch.add(19), (__cov__.branch.add(20), a) ?? (__cov__.branch.add(21), c));
  __cov__.stmt.add(6);
  r = !((__cov__.branch.add(22), a) && ((__cov__.branch.add(23), b) || (__cov__.branch.add(24), c)));
  __cov__.stmt.add(7);
  r = (__cov__.branch.add(25), a) && (__cov__.branch.add(26), b) && (__cov__.branch.add(27), c) && (__cov__.branch.add(28), a);
  __cov__.stmt.add(8);
  r = fn((__cov__.branch.add(29), a) || (__cov__.branch.add(30), b), (__cov__.branch.add(31), b) && (__cov__.branch.add(32), c));
  function fn(x, y) {
    __cov__.func.add(1);
    __cov__.stmt.add(9);
    return (__cov__.branch.add(33), x) ?? (__cov__.branch.add(34), y);
  }
  __cov__.stmt.add(10);
  return r;
}

