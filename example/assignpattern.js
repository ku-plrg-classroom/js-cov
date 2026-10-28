function assignpattern(input) {
  let a, b, rest, msg;
  [a = 1, b = 2, ...rest] = input.arr;
  ({ msg = "none", ...rest } = input.obj);
  for ([a = 0, b = a] of [[], [7]]) msg += a + b;
  try {
    JSON.parse(input.bad);
  } catch ({ message = "?", name = "E" }) {
    msg += name;
  }
  return [a, b, msg];
}
