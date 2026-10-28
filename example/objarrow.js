function objarrow(kind, x) {
  const make = (a, b) => ({ a, b, sum: a + b });
  const pick = (o, ...keys) => keys.map(k => o[k]);
  function count() { return arguments.length; }
  const counter = {
    n: 0,
    inc() { this.n++; return this; },
    twice: function () { return this.inc().inc(); },
  };
  switch (kind) {
    case "make": return make(x, x + 1).sum;
    case "pick": return pick(make(1, 2), "a", "sum").join(",");
    case "count": return count(x, x, x);
    case "counter": return counter.twice().n;
    default: return (() => ({}))();
  }
}
