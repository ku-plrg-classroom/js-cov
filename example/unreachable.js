function unreachable(x) {
  if (false) { return "never"; }
  while (false) x++;
  if (x) { return x; } else { return -x; }
  x = 0;
  return x;
}
