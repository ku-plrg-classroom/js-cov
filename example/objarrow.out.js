function objarrow(kind, x) {
  __cov__.func.add(0);
  const make = (__cov__.stmt.add(0), (a, b) => {
    __cov__.func.add(1);
    __cov__.stmt.add(1);
    return {
      a,
      b,
      sum: a + b
    };
  });
  const pick = (__cov__.stmt.add(2), (o, ...keys) => {
    __cov__.func.add(2);
    __cov__.stmt.add(4);
    return keys.map(k => {
      __cov__.func.add(3);
      __cov__.stmt.add(3);
      return o[k];
    });
  });
  function count() {
    __cov__.func.add(4);
    __cov__.stmt.add(5);
    return arguments.length;
  }
  const counter = (__cov__.stmt.add(6), {
    n: 0,
    inc() {
      __cov__.func.add(5);
      __cov__.stmt.add(7);
      this.n++;
      __cov__.stmt.add(8);
      return this;
    },
    twice: function () {
      __cov__.func.add(6);
      __cov__.stmt.add(9);
      return this.inc().inc();
    }
  });
  __cov__.stmt.add(10);
  switch (kind) {
    case "make":
      __cov__.branch.add(0);
      __cov__.stmt.add(11);
      return make(x, x + 1).sum;
    case "pick":
      __cov__.branch.add(1);
      __cov__.stmt.add(12);
      return pick(make(1, 2), "a", "sum").join(",");
    case "count":
      __cov__.branch.add(2);
      __cov__.stmt.add(13);
      return count(x, x, x);
    case "counter":
      __cov__.branch.add(3);
      __cov__.stmt.add(14);
      return counter.twice().n;
    default:
      __cov__.branch.add(4);
      __cov__.stmt.add(15);
      return (() => {
        __cov__.func.add(7);
        __cov__.stmt.add(16);
        return {};
      })();
  }
}

