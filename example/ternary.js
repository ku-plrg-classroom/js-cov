function ternary(a, b) {
  const sign = a > 0 ? "pos" : a < 0 ? "neg" : "zero";
  const m = (a > b ? a : b) - (a < b ? a : b);
  function clamp(x, lo = a < b ? a : b, hi = a < b ? b : a) {
    return x < lo ? lo : x > hi ? hi : x;
  }
  return sign + m + clamp(0) + clamp(100, 1, 2);
}
