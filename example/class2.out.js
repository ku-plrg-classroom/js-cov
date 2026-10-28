function class2(kind, v) {
  __cov__.func.add(0);
  class Base {
    static count = 0;
    static {
      __cov__.stmt.add(0);
      Base.count = 100;
    }
    #secret = v;
    value = v * 2;
    constructor() {
      __cov__.func.add(1);
      __cov__.stmt.add(1);
      Base.count++;
    }
    get secret() {
      __cov__.func.add(2);
      __cov__.stmt.add(2);
      return this.#secret;
    }
    #hidden() {
      __cov__.func.add(3);
      __cov__.stmt.add(3);
      return -1;
    }
    reveal(flag) {
      __cov__.func.add(4);
      __cov__.stmt.add(4);
      return flag ? (__cov__.branch.add(0), this.#hidden()) : (__cov__.branch.add(1), this.#secret);
    }
    static make(v) {
      __cov__.func.add(5);
      __cov__.stmt.add(5);
      return new Base(v);
    }
  }
  class Derived extends Base {
    constructor() {
      __cov__.func.add(6);
      __cov__.stmt.add(6);
      super();
      __cov__.stmt.add(7);
      this.kind = kind;
    }
    reveal(flag) {
      __cov__.func.add(7);
      __cov__.stmt.add(8);
      return super.reveal(flag) + 1;
    }
  }
  const Anon = (__cov__.stmt.add(9), class {
    run() {
      __cov__.func.add(8);
      __cov__.stmt.add(10);
      return "anon";
    }
  });
  __cov__.stmt.add(11);
  if (kind === "base") {
    __cov__.branch.add(2);
    __cov__.stmt.add(12);
    return Base.make(v).reveal(false) + Base.count;
  } else {
    __cov__.branch.add(3);
  }
  __cov__.stmt.add(13);
  if (kind === "derived") {
    __cov__.branch.add(4);
    __cov__.stmt.add(14);
    return new Derived().reveal(true);
  } else {
    __cov__.branch.add(5);
  }
  __cov__.stmt.add(15);
  return new Anon().run();
}

