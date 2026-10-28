function paramfn(x, f = y => y * 2, g = (a, b = a > 0 ? a : -a) => b, k = () => { return "never"; }) {
  const h = (n = x ?? 0, m = n > 5 ? n : 5) => n + m;
  return f(x) + g(x) + h() + h(1, 1);
}
