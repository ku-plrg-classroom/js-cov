function generator(n) {
  function* range(a, b) { for (let i = a; i < b; i++) yield i; return "done"; }
  function* evens(a, b) { for (const x of range(a, b)) if (x % 2 === 0) yield x; }
  const unused = function* () { yield 0; };
  const out = [];
  for (const x of evens(0, n)) out.push(x);
  const it = range(0, 1);
  it.next(); it.next();
  return out;
}
