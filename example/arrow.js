function arrow(kind, a, b) {
  const add = (x, y = x * 2) => x + y;
  const id = x => x;
  const pair = (x, ...rest) => [x, rest.length];
  const nested = x => y => z => x + y + z;
  const obj = {
    m(x) { return x + 1; },
    get g() { return 1; },
    set s(v) { this._s = v; },
  };
  switch (kind) {
    case "add": return add(a, b);
    case "add1": return add(a);
    case "id": return id(a);
    case "pair": return pair(a, b, b);
    case "nested": return nested(a)(b)(1);
    case "obj": obj.s = a; return obj.m(a) + obj.g + obj._s;
  }
}
