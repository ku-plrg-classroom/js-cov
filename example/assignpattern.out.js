function assignpattern(input) {
  __cov__.func.add(0);
  let a, b, rest, msg;
  __cov__.stmt.add(0);
  [a = (__cov__.stmt.add(1), 1), b = (__cov__.stmt.add(2), 2), ...rest] = input.arr;
  __cov__.stmt.add(3);
  ({msg = (__cov__.stmt.add(4), "none"), ...rest} = input.obj);
  __cov__.stmt.add(5);
  for ([a = (__cov__.stmt.add(6), 0), b = (__cov__.stmt.add(7), a)] of [[], [7]]) {
    __cov__.stmt.add(8);
    msg += a + b;
  }
  __cov__.stmt.add(9);
  try {
    __cov__.stmt.add(10);
    JSON.parse(input.bad);
  } catch ({message = (__cov__.stmt.add(11), "?"), name = (__cov__.stmt.add(12), "E")}) {
    __cov__.stmt.add(13);
    msg += name;
  }
  __cov__.stmt.add(14);
  return [a, b, msg];
}

