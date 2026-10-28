function loopswitch(items) {
  __cov__.func.add(0);
  let odd = (__cov__.stmt.add(0), 0), even = (__cov__.stmt.add(1), 0), skipped = (__cov__.stmt.add(2), 0), i, j;
  __cov__.stmt.add(3);
  for ((i = 0, j = items.length - 1); i <= j; (i++, j--)) {
    __cov__.stmt.add(4);
    switch (items[i] % 3) {
      case 0:
        __cov__.branch.add(0);
        __cov__.stmt.add(5);
        continue;
      case 1:
        __cov__.branch.add(1);
        __cov__.stmt.add(6);
        odd++;
        __cov__.stmt.add(7);
        break;
      default:
        __cov__.branch.add(2);
        __cov__.stmt.add(8);
        even++;
    }
    __cov__.stmt.add(9);
    if (items[j] === undefined) {
      __cov__.branch.add(3);
      __cov__.stmt.add(10);
      break;
    } else {
      __cov__.branch.add(4);
    }
    __cov__.stmt.add(11);
    skipped += items[j] % 2;
  }
  __cov__.stmt.add(12);
  __cov__.stmt.add(13);
  outer: while (true) {
    __cov__.stmt.add(14);
    switch (odd) {
      case 0:
        __cov__.branch.add(5);
        __cov__.stmt.add(15);
        break outer;
      default:
        __cov__.branch.add(6);
        __cov__.stmt.add(16);
        odd--;
        __cov__.stmt.add(17);
        continue outer;
    }
  }
  __cov__.stmt.add(18);
  return [odd, even, skipped];
}

