function loopswitch(items) {
  let odd = 0, even = 0, skipped = 0, i, j;
  for (i = 0, j = items.length - 1; i <= j; i++, j--) {
    switch (items[i] % 3) {
      case 0: continue;
      case 1: odd++; break;
      default: even++;
    }
    if (items[j] === undefined) break;
    skipped += items[j] % 2;
  }
  outer: while (true) {
    switch (odd) {
      case 0: break outer;
      default: odd--; continue outer;
    }
  }
  return [odd, even, skipped];
}
