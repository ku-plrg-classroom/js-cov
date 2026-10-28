function assign(o) {
  o.a ||= 1;
  o.b &&= 2;
  o.c ??= 3;
  const v = o?.d?.e ?? "none";
  const arr = [...(o.list || []), o.x ?? 0];
  return o.f?.() ?? v + arr.length;
}
