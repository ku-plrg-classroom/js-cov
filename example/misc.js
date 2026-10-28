function misc(x) {
  let a = 1, b = 2;;
  a = (b++, b * 2), b = (a, b);
  ;
  { }
  x > 0 ? a : b;
  void 0;
  debugger;
  label: { if (x > 5) break label; a += 100; }
  return a + b;
}
