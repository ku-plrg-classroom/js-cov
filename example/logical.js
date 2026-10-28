function logical(a, b, c) {
  let r = a && b;
  r = a || b;
  r = a ?? b;
  r = (a && b) || (c ?? a);
  r = a ? b && c : b || c;
  r = (a || b) ? c : (a ?? c);
  r = !(a && (b || c));
  r = a && b && c && a;
  r = fn(a || b, b && c);
  function fn(x, y) { return x ?? y; }
  return r;
}
