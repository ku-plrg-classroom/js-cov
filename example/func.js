function func(a, b) {
  function abs(x) {
    if (x >= 0) { return x; }
    return -x;
  }
  function twice(f) {
    return x => {
      return f(f(x));
    }
  }
  function addN(n) {
    return x => x + n;
  }
  twice(addN(a));
  return abs(b);
}
