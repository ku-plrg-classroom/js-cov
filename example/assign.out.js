function assign(o) {
  __cov__.func.add(0);
  __cov__.stmt.add(0);
  o.a ||= 1;
  __cov__.stmt.add(1);
  o.b &&= 2;
  __cov__.stmt.add(2);
  o.c ??= 3;
  const v = (__cov__.stmt.add(3), (__cov__.branch.add(0), o?.d?.e) ?? (__cov__.branch.add(1), "none"));
  const arr = (__cov__.stmt.add(4), [...(__cov__.branch.add(2), o.list) || (__cov__.branch.add(3), []), (__cov__.branch.add(4), o.x) ?? (__cov__.branch.add(5), 0)]);
  __cov__.stmt.add(5);
  return (__cov__.branch.add(6), o.f?.()) ?? (__cov__.branch.add(7), v + arr.length);
}

