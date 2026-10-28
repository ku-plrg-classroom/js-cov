function decl(x) {
  var a;
  let b;
  const c = 1;
  var d = 2, e, f = 3;
  function g() {}
  class H {}
  if (x) { function i() {} }
  return c + d + f;
}
