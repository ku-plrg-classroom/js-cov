function control(n) {
  let s = 0, i = 0;
  for (;;) { if (i >= n) break; s += i++; }
  while (true) { if (--i < 0) break; }
  outer: for (const a of [1, 2, 3]) {
    for (const b in { p: 1, q: 2 }) {
      if (b === "q") continue outer;
      s += a;
    }
  }
  do { s++; } while (false);
  for (let k = 0; k < 0; k++) s = -1;
  while (n < 0) { s = -2; break; }
  return s;
}
