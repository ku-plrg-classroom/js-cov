function nested(x) {
  __cov__.func.add(0);
  const r = (__cov__.stmt.add(0), (function iife(y) {
    __cov__.func.add(1);
    __cov__.stmt.add(1);
    return y + 1;
  })(x));
  function outer() {
    __cov__.func.add(2);
    function inner() {
      __cov__.func.add(3);
      __cov__.stmt.add(2);
      return x * 2;
    }
    __cov__.stmt.add(3);
    return inner;
  }
  __cov__.stmt.add(4);
  {
    let block = (__cov__.stmt.add(5), outer()());
    __cov__.stmt.add(6);
    x = block + r;
  }
  __cov__.stmt.add(7);
  if (x > 1000) {
    __cov__.branch.add(0);
    function deep() {
      __cov__.func.add(4);
      __cov__.stmt.add(8);
      return "deep";
    }
    __cov__.stmt.add(9);
    return deep();
  } else {
    __cov__.branch.add(1);
  }
  const unused = (__cov__.stmt.add(10), () => {
    __cov__.func.add(5);
    __cov__.stmt.add(11);
    return "never";
  });
  __cov__.stmt.add(12);
  return x;
}

