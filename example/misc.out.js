function misc(x) {
  __cov__.func.add(0);
  let a = (__cov__.stmt.add(0), 1), b = (__cov__.stmt.add(1), 2);
  __cov__.stmt.add(2);
  ;
  __cov__.stmt.add(3);
  (a = (b++, b * 2), b = (a, b));
  __cov__.stmt.add(4);
  ;
  __cov__.stmt.add(5);
  {}
  __cov__.stmt.add(6);
  x > 0 ? (__cov__.branch.add(0), a) : (__cov__.branch.add(1), b);
  __cov__.stmt.add(7);
  void 0;
  __cov__.stmt.add(8);
  debugger;
  __cov__.stmt.add(9);
  label: {
    __cov__.stmt.add(10);
    if (x > 5) {
      __cov__.branch.add(2);
      __cov__.stmt.add(11);
      break label;
    } else {
      __cov__.branch.add(3);
    }
    __cov__.stmt.add(12);
    a += 100;
  }
  __cov__.stmt.add(13);
  return a + b;
}

