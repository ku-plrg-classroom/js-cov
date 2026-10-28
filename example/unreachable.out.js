function unreachable(x) {
  __cov__.func.add(0);
  __cov__.stmt.add(0);
  if (false) {
    __cov__.branch.add(0);
    __cov__.stmt.add(1);
    return "never";
  } else {
    __cov__.branch.add(1);
  }
  __cov__.stmt.add(2);
  while (false) {
    __cov__.stmt.add(3);
    x++;
  }
  __cov__.stmt.add(4);
  if (x) {
    __cov__.branch.add(2);
    __cov__.stmt.add(5);
    return x;
  } else {
    __cov__.branch.add(3);
    __cov__.stmt.add(6);
    return -x;
  }
  __cov__.stmt.add(7);
  x = 0;
  __cov__.stmt.add(8);
  return x;
}

