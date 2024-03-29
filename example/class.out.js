function f(x, y) {
  __cov__.func.add(0);
  class A {
    constructor(x) {
      __cov__.func.add(1);
      __cov__.stmt.add(0);
      this._x = x < 0 ? (__cov__.branch.add(0), -x) : (__cov__.branch.add(1), x);
    }
    get x() {
      __cov__.func.add(2);
      __cov__.stmt.add(1);
      return this._x;
    }
    set x(x) {
      __cov__.func.add(3);
      __cov__.stmt.add(2);
      this._x = x < 0 ? (__cov__.branch.add(2), -x) : (__cov__.branch.add(3), x);
    }
    static foo() {
      __cov__.func.add(4);
      __cov__.stmt.add(3);
      return 42;
    }
  }
  const a = (__cov__.stmt.add(4), new A(x));
  __cov__.stmt.add(5);
  a.x = y;
  __cov__.stmt.add(6);
  return A.foo() + a.x;
}
