function ifelse(x) {
  __cov__.func.add(0);
  let r = (__cov__.stmt.add(0), "");
  __cov__.stmt.add(1);
  if (x < 0) {
    __cov__.branch.add(0);
    __cov__.stmt.add(2);
    r = "neg";
  } else {
    __cov__.branch.add(1);
    __cov__.stmt.add(3);
    if (x === 0) {
      __cov__.branch.add(2);
      __cov__.stmt.add(4);
      r = "zero";
    } else {
      __cov__.branch.add(3);
      __cov__.stmt.add(5);
      if (x < 10) {
        __cov__.branch.add(4);
        __cov__.stmt.add(6);
        r = "small";
      } else {
        __cov__.branch.add(5);
        __cov__.stmt.add(7);
        r = "big";
      }
    }
  }
  __cov__.stmt.add(8);
  if (x % 2 === 0) {
    __cov__.branch.add(6);
    __cov__.stmt.add(9);
    r += "-even";
  } else {
    __cov__.branch.add(7);
  }
  __cov__.stmt.add(10);
  if (x > 100) {
    __cov__.branch.add(8);
    __cov__.stmt.add(11);
    if (x > 1000) {
      __cov__.branch.add(9);
      __cov__.stmt.add(12);
      r += "-huge";
    } else {
      __cov__.branch.add(10);
    }
  } else {
    __cov__.branch.add(11);
    __cov__.stmt.add(13);
    if (x < -100) {
      __cov__.branch.add(12);
      __cov__.stmt.add(14);
      r += "-tiny";
    } else {
      __cov__.branch.add(13);
    }
  }
  __cov__.stmt.add(15);
  return r;
}

