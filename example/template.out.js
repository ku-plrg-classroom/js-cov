function template(name, n) {
  __cov__.func.add(0);
  const tag = (__cov__.stmt.add(0), (strs, ...vals) => {
    __cov__.func.add(1);
    __cov__.stmt.add(1);
    return strs.raw.join("|") + vals.join(",");
  });
  const s = (__cov__.stmt.add(2), `Hello, ${(__cov__.branch.add(0), name) ?? (__cov__.branch.add(1), "world")}! You have ${n} ${n === 1 ? (__cov__.branch.add(2), "item") : (__cov__.branch.add(3), "items")}.`);
  const t = (__cov__.stmt.add(3), tag`a${n > 0 ? (__cov__.branch.add(4), "+") : (__cov__.branch.add(5), "-")}b${n}`);
  __cov__.stmt.add(4);
  return s + t;
}

