function emptybody(n) {
  __cov__.func.add(0);
  let i = (__cov__.stmt.add(0), n);
  __cov__.stmt.add(1);
  while (i-- > 0) {
    __cov__.stmt.add(2);
    ;
  }
  __cov__.stmt.add(3);
  for (; ; ) {
    __cov__.stmt.add(4);
    break;
  }
  __cov__.stmt.add(5);
  for (const x of []) {
    __cov__.stmt.add(6);
    ;
  }
  __cov__.stmt.add(7);
  if (n > 0) {
    __cov__.branch.add(0);
    __cov__.stmt.add(8);
    ;
  } else {
    __cov__.branch.add(1);
    __cov__.stmt.add(9);
    ;
  }
  __cov__.stmt.add(10);
  do {
    __cov__.stmt.add(11);
    ;
  } while (false);
  __cov__.stmt.add(12);
  __cov__.stmt.add(13);
  label: ;
  __cov__.stmt.add(14);
  switch (n) {
    case 0:
      __cov__.branch.add(2);
      __cov__.stmt.add(15);
      ;
    default:
      __cov__.branch.add(3);
  }
  __cov__.stmt.add(16);
  return i;
}

