function recursion(n, memo = (__cov__.stmt.add(0), {})) {
  __cov__.func.add(0);
  __cov__.stmt.add(1);
  if ((n in memo)) {
    __cov__.branch.add(0);
    __cov__.stmt.add(2);
    return memo[n];
  } else {
    __cov__.branch.add(1);
  }
  __cov__.stmt.add(3);
  if (n < 2) {
    __cov__.branch.add(2);
    __cov__.stmt.add(4);
    return n;
  } else {
    __cov__.branch.add(3);
  }
  const v = (__cov__.stmt.add(5), recursion(n - 1, memo) + recursion(n - 2, memo));
  __cov__.stmt.add(6);
  memo[n] = v;
  __cov__.stmt.add(7);
  return v;
}

