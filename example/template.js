function template(name, n) {
  const tag = (strs, ...vals) => strs.raw.join("|") + vals.join(",");
  const s = `Hello, ${name ?? "world"}! You have ${n} ${n === 1 ? "item" : "items"}.`;
  const t = tag`a${n > 0 ? "+" : "-"}b${n}`;
  return s + t;
}
