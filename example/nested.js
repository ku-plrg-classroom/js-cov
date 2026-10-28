function nested(x) {
  const r = (function iife(y) { return y + 1; })(x);
  function outer() {
    function inner() { return x * 2; }
    return inner;
  }
  {
    let block = outer()();
    x = block + r;
  }
  if (x > 1000) {
    function deep() { return "deep"; }
    return deep();
  }
  const unused = () => { return "never"; };
  return x;
}
