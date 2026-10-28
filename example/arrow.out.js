function arrow(kind, a, b) {
  __cov__.func.add(0);
  const add = (__cov__.stmt.add(0), (x, y = (__cov__.stmt.add(1), x * 2)) => {
    __cov__.func.add(1);
    __cov__.stmt.add(2);
    return x + y;
  });
  const id = (__cov__.stmt.add(3), x => {
    __cov__.func.add(2);
    __cov__.stmt.add(4);
    return x;
  });
  const pair = (__cov__.stmt.add(5), (x, ...rest) => {
    __cov__.func.add(3);
    __cov__.stmt.add(6);
    return [x, rest.length];
  });
  const nested = (__cov__.stmt.add(7), x => {
    __cov__.func.add(4);
    __cov__.stmt.add(10);
    return y => {
      __cov__.func.add(5);
      __cov__.stmt.add(9);
      return z => {
        __cov__.func.add(6);
        __cov__.stmt.add(8);
        return x + y + z;
      };
    };
  });
  const obj = (__cov__.stmt.add(11), {
    m(x) {
      __cov__.func.add(7);
      __cov__.stmt.add(12);
      return x + 1;
    },
    get g() {
      __cov__.func.add(8);
      __cov__.stmt.add(13);
      return 1;
    },
    set s(v) {
      __cov__.func.add(9);
      __cov__.stmt.add(14);
      this._s = v;
    }
  });
  __cov__.stmt.add(15);
  switch (kind) {
    case "add":
      __cov__.branch.add(0);
      __cov__.stmt.add(16);
      return add(a, b);
    case "add1":
      __cov__.branch.add(1);
      __cov__.stmt.add(17);
      return add(a);
    case "id":
      __cov__.branch.add(2);
      __cov__.stmt.add(18);
      return id(a);
    case "pair":
      __cov__.branch.add(3);
      __cov__.stmt.add(19);
      return pair(a, b, b);
    case "nested":
      __cov__.branch.add(4);
      __cov__.stmt.add(20);
      return nested(a)(b)(1);
    case "obj":
      __cov__.branch.add(5);
      __cov__.stmt.add(21);
      obj.s = a;
      __cov__.stmt.add(22);
      return obj.m(a) + obj.g + obj._s;
  }
}

