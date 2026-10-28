function defaults(kind, input) {
  __cov__.func.add(0);
  const {x = (__cov__.stmt.add(0), 1), y: {z = (__cov__.stmt.add(1), 2)} = (__cov__.stmt.add(2), {}), ...others} = (__cov__.stmt.add(3), input);
  const [p = (__cov__.stmt.add(4), 10), , q = (__cov__.stmt.add(5), 20)] = (__cov__.stmt.add(6), kind === "arr" ? (__cov__.branch.add(0), input) : (__cov__.branch.add(1), []));
  let r;
  var s, t = (__cov__.stmt.add(7), x + z);
  __cov__.stmt.add(8);
  for (const [k = (__cov__.stmt.add(9), "none")] of [[], ["k"]]) {
    __cov__.stmt.add(10);
    r = k;
  }
  function f({a = (__cov__.stmt.add(11), p), b = (__cov__.stmt.add(12), q)} = (__cov__.stmt.add(13), {}), [c = (__cov__.stmt.add(14), 3)] = (__cov__.stmt.add(15), [])) {
    __cov__.func.add(1);
    __cov__.stmt.add(16);
    return a + b + c;
  }
  __cov__.stmt.add(17);
  return kind === "arr" ? (__cov__.branch.add(2), f()) : (__cov__.branch.add(3), f({
    a: 1,
    b: 2
  }, [4]) + t + r);
}

