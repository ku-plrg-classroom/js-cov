function defaults(kind, input) {
  const { x = 1, y: { z = 2 } = {}, ...others } = input;
  const [p = 10, , q = 20] = kind === "arr" ? input : [];
  let r;
  var s, t = x + z;
  for (const [k = "none"] of [[], ["k"]]) { r = k; }
  function f({ a = p, b = q } = {}, [c = 3] = []) { return a + b + c; }
  return kind === "arr" ? f() : f({ a: 1, b: 2 }, [4]) + t + r;
}
