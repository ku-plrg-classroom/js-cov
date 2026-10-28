function trycatch(kind) {
  let log = [];
  try {
    log.push("try");
    if (kind === "throw") throw new Error("boom");
    if (kind === "return") return log;
  } catch (e) {
    log.push("catch:" + e.message);
  } finally {
    log.push("finally");
  }
  try { JSON.parse(kind); } catch { log.push("bad-json"); }
  return log;
}
