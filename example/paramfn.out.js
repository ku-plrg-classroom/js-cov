function paramfn(x, f = (__cov__.stmt.add(0), y => {
  __cov__.func.add(0);
  __cov__.stmt.add(1);
  return y * 2;
}), g = (__cov__.stmt.add(2), (a, b = (__cov__.stmt.add(3), a > 0 ? (__cov__.branch.add(0), a) : (__cov__.branch.add(1), -a))) => {
  __cov__.func.add(1);
  __cov__.stmt.add(4);
  return b;
}), k = (__cov__.stmt.add(5), () => {
  __cov__.func.add(2);
  __cov__.stmt.add(6);
  return "never";
})) {
  __cov__.func.add(3);
  const h = (__cov__.stmt.add(7), (n = (__cov__.stmt.add(8), (__cov__.branch.add(2), x) ?? (__cov__.branch.add(3), 0)), m = (__cov__.stmt.add(9), n > 5 ? (__cov__.branch.add(4), n) : (__cov__.branch.add(5), 5))) => {
    __cov__.func.add(4);
    __cov__.stmt.add(10);
    return n + m;
  });
  __cov__.stmt.add(11);
  return f(x) + g(x) + h() + h(1, 1);
}

