function control(n) {
  __cov__.func.add(0);
  let s = (__cov__.stmt.add(0), 0), i = (__cov__.stmt.add(1), 0);
  __cov__.stmt.add(2);
  for (; ; ) {
    __cov__.stmt.add(3);
    if (i >= n) {
      __cov__.branch.add(0);
      __cov__.stmt.add(4);
      break;
    } else {
      __cov__.branch.add(1);
    }
    __cov__.stmt.add(5);
    s += i++;
  }
  __cov__.stmt.add(6);
  while (true) {
    __cov__.stmt.add(7);
    if (--i < 0) {
      __cov__.branch.add(2);
      __cov__.stmt.add(8);
      break;
    } else {
      __cov__.branch.add(3);
    }
  }
  __cov__.stmt.add(9);
  __cov__.stmt.add(10);
  outer: for (const a of [1, 2, 3]) {
    __cov__.stmt.add(11);
    for (const b in {
      p: 1,
      q: 2
    }) {
      __cov__.stmt.add(12);
      if (b === "q") {
        __cov__.branch.add(4);
        __cov__.stmt.add(13);
        continue outer;
      } else {
        __cov__.branch.add(5);
      }
      __cov__.stmt.add(14);
      s += a;
    }
  }
  __cov__.stmt.add(15);
  do {
    __cov__.stmt.add(16);
    s++;
  } while (false);
  __cov__.stmt.add(17);
  for (let k = (__cov__.stmt.add(18), 0); k < 0; k++) {
    __cov__.stmt.add(19);
    s = -1;
  }
  __cov__.stmt.add(20);
  while (n < 0) {
    __cov__.stmt.add(21);
    s = -2;
    __cov__.stmt.add(22);
    break;
  }
  __cov__.stmt.add(23);
  return s;
}

