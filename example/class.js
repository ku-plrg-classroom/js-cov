function f(x, y) {
  class A {
    constructor(x) {
      this._x = x < 0 ? -x : x;
    }
    get x() {
      return this._x;
    }
    set x(x) {
      this._x = x < 0 ? -x : x;
    }
    static foo() {
      return 42;
    }
  }
  const a = new A(x);
  a.x = y;
  return A.foo() + a.x;
}
