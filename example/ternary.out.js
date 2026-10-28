function ternary(a, b) {
  __cov__.func.add(0);
  const sign = (__cov__.stmt.add(0), a > 0 ? (__cov__.branch.add(0), "pos") : (__cov__.branch.add(1), a < 0 ? (__cov__.branch.add(2), "neg") : (__cov__.branch.add(3), "zero")));
  const m = (__cov__.stmt.add(1), (a > b ? (__cov__.branch.add(4), a) : (__cov__.branch.add(5), b)) - (a < b ? (__cov__.branch.add(6), a) : (__cov__.branch.add(7), b)));
  function clamp(x, lo = (__cov__.stmt.add(2), a < b ? (__cov__.branch.add(8), a) : (__cov__.branch.add(9), b)), hi = (__cov__.stmt.add(3), a < b ? (__cov__.branch.add(10), b) : (__cov__.branch.add(11), a))) {
    __cov__.func.add(1);
    __cov__.stmt.add(4);
    return x < lo ? (__cov__.branch.add(12), lo) : (__cov__.branch.add(13), x > hi ? (__cov__.branch.add(14), hi) : (__cov__.branch.add(15), x));
  }
  __cov__.stmt.add(5);
  return sign + m + clamp(0) + clamp(100, 1, 2);
}

