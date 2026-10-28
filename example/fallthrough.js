function fallthrough(x) {
  let r = [];
  switch (x) {
    case 1:
    case 2:
      r.push("one-or-two");
    case 3:
      r.push("three");
      break;
    default:
      r.push("default");
    case 4:
      r.push("four");
      break;
    case 5: {
      r.push("five");
    }
  }
  switch (typeof x) { case "string": return "str"; }
  return r.join(",");
}
