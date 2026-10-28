function generator(n) {
  __cov__.func.add(0);
  function* range(a, b) {
    __cov__.func.add(1);
    __cov__.stmt.add(0);
    for (let i = (__cov__.stmt.add(1), a); i < b; i++) {
      __cov__.stmt.add(2);
      yield i;
    }
    __cov__.stmt.add(3);
    return "done";
  }
  function* evens(a, b) {
    __cov__.func.add(2);
    __cov__.stmt.add(4);
    for (const x of range(a, b)) {
      __cov__.stmt.add(5);
      if (x % 2 === 0) {
        __cov__.branch.add(0);
        __cov__.stmt.add(6);
        yield x;
      } else {
        __cov__.branch.add(1);
      }
    }
  }
  const unused = (__cov__.stmt.add(7), function* () {
    __cov__.func.add(3);
    __cov__.stmt.add(8);
    yield 0;
  });
  const out = (__cov__.stmt.add(9), []);
  __cov__.stmt.add(10);
  for (const x of evens(0, n)) {
    __cov__.stmt.add(11);
    out.push(x);
  }
  const it = (__cov__.stmt.add(12), range(0, 1));
  __cov__.stmt.add(13);
  it.next();
  __cov__.stmt.add(14);
  it.next();
  __cov__.stmt.add(15);
  return out;
}

