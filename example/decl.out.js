function decl(x) {
  __cov__.func.add(0);
  var a;
  let b;
  const c = (__cov__.stmt.add(0), 1);
  var d = (__cov__.stmt.add(1), 2), e, f = (__cov__.stmt.add(2), 3);
  function g() {
    __cov__.func.add(1);
  }
  class H {}
  __cov__.stmt.add(3);
  if (x) {
    __cov__.branch.add(0);
    function i() {
      __cov__.func.add(2);
    }
  } else {
    __cov__.branch.add(1);
  }
  __cov__.stmt.add(4);
  return c + d + f;
}

