function ifelse(x) {
  let r = "";
  if (x < 0) r = "neg";
  else if (x === 0) r = "zero";
  else if (x < 10) { r = "small"; }
  else r = "big";
  if (x % 2 === 0) r += "-even";
  if (x > 100) { if (x > 1000) r += "-huge"; }
  else { if (x < -100) r += "-tiny"; }
  return r;
}
