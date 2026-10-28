function class2(kind, v) {
  class Base {
    static count = 0;
    static { Base.count = 100; }
    #secret = v;
    value = v * 2;
    constructor() { Base.count++; }
    get secret() { return this.#secret; }
    #hidden() { return -1; }
    reveal(flag) { return flag ? this.#hidden() : this.#secret; }
    static make(v) { return new Base(v); }
  }
  class Derived extends Base {
    constructor() { super(); this.kind = kind; }
    reveal(flag) { return super.reveal(flag) + 1; }
  }
  const Anon = class { run() { return "anon"; } };
  if (kind === "base") return Base.make(v).reveal(false) + Base.count;
  if (kind === "derived") return new Derived().reveal(true);
  return new Anon().run();
}
