function recursion(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  const v = recursion(n - 1, memo) + recursion(n - 2, memo);
  memo[n] = v;
  return v;
}
