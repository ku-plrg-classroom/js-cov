function callback(arr, mode) {
  __cov__.func.add(0);
  const doubled = (__cov__.stmt.add(0), arr.map(x => {
    __cov__.func.add(1);
    __cov__.stmt.add(1);
    return x * 2;
  }));
  const evens = (__cov__.stmt.add(2), doubled.filter(x => {
    __cov__.func.add(2);
    __cov__.stmt.add(3);
    return x % 2 === 0;
  }));
  const sum = (__cov__.stmt.add(4), evens.reduce((acc, x) => {
    __cov__.func.add(3);
    __cov__.stmt.add(5);
    return acc + x;
  }, 0));
  __cov__.stmt.add(6);
  arr.forEach(function (x, i) {
    __cov__.func.add(4);
    __cov__.stmt.add(7);
    if ((__cov__.branch.add(0), i === 0) && (__cov__.branch.add(1), x < 0)) {
      __cov__.branch.add(2);
      __cov__.stmt.add(8);
      throw new Error("negative head");
    } else {
      __cov__.branch.add(3);
    }
  });
  const sorted = (__cov__.stmt.add(9), [...arr].sort((a, b) => {
    __cov__.func.add(5);
    __cov__.stmt.add(10);
    return mode === "desc" ? (__cov__.branch.add(4), b - a) : (__cov__.branch.add(5), a - b);
  }));
  const found = (__cov__.stmt.add(11), (__cov__.branch.add(6), arr.find(x => {
    __cov__.func.add(6);
    __cov__.stmt.add(12);
    return x > 1e9;
  })) ?? (__cov__.branch.add(7), arr.findLast(x => {
    __cov__.func.add(7);
    __cov__.stmt.add(13);
    return x < -1e9;
  })));
  __cov__.stmt.add(14);
  (__cov__.branch.add(8), arr.length > 100) && (__cov__.branch.add(9), arr.forEach(x => {
    __cov__.func.add(8);
    __cov__.stmt.add(15);
    return console.log(x);
  }));
  __cov__.stmt.add(16);
  return sorted.length + sum + (found === undefined ? (__cov__.branch.add(10), 0) : (__cov__.branch.add(11), 1));
}

