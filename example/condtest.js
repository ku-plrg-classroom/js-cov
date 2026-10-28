function condtest(a, b, n) {
  let r = 0;
  if (a && b) r += 1;
  while (n > 0 && (a || b)) { n--; r += 2; }
  for (let i = 0; i < n || a; i++) { if (i > 3) break; r += 4; }
  switch (a ? "a" : b ? "b" : "none") {
    case "a": r += 8; break;
    case "b": r += 16; break;
  }
  const arr = [10, 20];
  r += arr[a ? 0 : 1];
  if (r > 100) throw a ? new Error("big") : new RangeError("huge");
  return r;
}
