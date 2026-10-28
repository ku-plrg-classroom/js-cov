function fallthrough(x) {
  __cov__.func.add(0);
  let r = (__cov__.stmt.add(0), []);
  __cov__.stmt.add(1);
  switch (x) {
    case 1:
      __cov__.branch.add(0);
    case 2:
      __cov__.branch.add(1);
      __cov__.stmt.add(2);
      r.push("one-or-two");
    case 3:
      __cov__.branch.add(2);
      __cov__.stmt.add(3);
      r.push("three");
      __cov__.stmt.add(4);
      break;
    default:
      __cov__.branch.add(3);
      __cov__.stmt.add(5);
      r.push("default");
    case 4:
      __cov__.branch.add(4);
      __cov__.stmt.add(6);
      r.push("four");
      __cov__.stmt.add(7);
      break;
    case 5:
      __cov__.branch.add(5);
      __cov__.stmt.add(8);
      {
        __cov__.stmt.add(9);
        r.push("five");
      }
  }
  __cov__.stmt.add(10);
  switch (typeof x) {
    case "string":
      __cov__.branch.add(6);
      __cov__.stmt.add(11);
      return "str";
  }
  __cov__.stmt.add(12);
  return r.join(",");
}

