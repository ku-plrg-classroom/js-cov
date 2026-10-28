function condtest(a, b, n) {
  __cov__.func.add(0);
  let r = (__cov__.stmt.add(0), 0);
  __cov__.stmt.add(1);
  if ((__cov__.branch.add(0), a) && (__cov__.branch.add(1), b)) {
    __cov__.branch.add(2);
    __cov__.stmt.add(2);
    r += 1;
  } else {
    __cov__.branch.add(3);
  }
  __cov__.stmt.add(3);
  while ((__cov__.branch.add(4), n > 0) && ((__cov__.branch.add(5), a) || (__cov__.branch.add(6), b))) {
    __cov__.stmt.add(4);
    n--;
    __cov__.stmt.add(5);
    r += 2;
  }
  __cov__.stmt.add(6);
  for (let i = (__cov__.stmt.add(7), 0); (__cov__.branch.add(7), i < n) || (__cov__.branch.add(8), a); i++) {
    __cov__.stmt.add(8);
    if (i > 3) {
      __cov__.branch.add(9);
      __cov__.stmt.add(9);
      break;
    } else {
      __cov__.branch.add(10);
    }
    __cov__.stmt.add(10);
    r += 4;
  }
  __cov__.stmt.add(11);
  switch (a ? (__cov__.branch.add(11), "a") : (__cov__.branch.add(12), b ? (__cov__.branch.add(13), "b") : (__cov__.branch.add(14), "none"))) {
    case "a":
      __cov__.branch.add(15);
      __cov__.stmt.add(12);
      r += 8;
      __cov__.stmt.add(13);
      break;
    case "b":
      __cov__.branch.add(16);
      __cov__.stmt.add(14);
      r += 16;
      __cov__.stmt.add(15);
      break;
  }
  const arr = (__cov__.stmt.add(16), [10, 20]);
  __cov__.stmt.add(17);
  r += arr[a ? (__cov__.branch.add(17), 0) : (__cov__.branch.add(18), 1)];
  __cov__.stmt.add(18);
  if (r > 100) {
    __cov__.branch.add(19);
    __cov__.stmt.add(19);
    throw a ? (__cov__.branch.add(20), new Error("big")) : (__cov__.branch.add(21), new RangeError("huge"));
  } else {
    __cov__.branch.add(22);
  }
  __cov__.stmt.add(20);
  return r;
}

