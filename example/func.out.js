function func(a, b) {
  __cov__.func.add(0);
  function abs(x) {
    __cov__.func.add(1);
    __cov__.stmt.add(0);
    if (x >= 0) {
      __cov__.branch.add(0);
      __cov__.stmt.add(1);
      return x;
    } else {
      __cov__.branch.add(1);
    }
    __cov__.stmt.add(2);
    return -x;
  }
  function twice(f) {
    __cov__.func.add(2);
    __cov__.stmt.add(3);
    return x => {
      __cov__.func.add(3);
      __cov__.stmt.add(4);
      return f(f(x));
    };
  }
  function addN(n) {
    __cov__.func.add(4);
    __cov__.stmt.add(5);
    return x => {
      __cov__.func.add(5);
      __cov__.stmt.add(6);
      return x + n;
    };
  }
  __cov__.stmt.add(7);
  twice(addN(a));
  __cov__.stmt.add(8);
  return abs(b);
}
