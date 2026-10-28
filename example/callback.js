function callback(arr, mode) {
  const doubled = arr.map(x => x * 2);
  const evens = doubled.filter(x => x % 2 === 0);
  const sum = evens.reduce((acc, x) => acc + x, 0);
  arr.forEach(function (x, i) {
    if (i === 0 && x < 0) throw new Error("negative head");
  });
  const sorted = [...arr].sort((a, b) => mode === "desc" ? b - a : a - b);
  const found = arr.find(x => x > 1e9) ?? arr.findLast(x => x < -1e9);
  arr.length > 100 && arr.forEach(x => console.log(x));
  return sorted.length + sum + (found === undefined ? 0 : 1);
}
