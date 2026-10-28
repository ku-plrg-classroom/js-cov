function trycatch(kind) {
  __cov__.func.add(0);
  let log = (__cov__.stmt.add(0), []);
  __cov__.stmt.add(1);
  try {
    __cov__.stmt.add(2);
    log.push("try");
    __cov__.stmt.add(3);
    if (kind === "throw") {
      __cov__.branch.add(0);
      __cov__.stmt.add(4);
      throw new Error("boom");
    } else {
      __cov__.branch.add(1);
    }
    __cov__.stmt.add(5);
    if (kind === "return") {
      __cov__.branch.add(2);
      __cov__.stmt.add(6);
      return log;
    } else {
      __cov__.branch.add(3);
    }
  } catch (e) {
    __cov__.stmt.add(7);
    log.push("catch:" + e.message);
  } finally {
    __cov__.stmt.add(8);
    log.push("finally");
  }
  __cov__.stmt.add(9);
  try {
    __cov__.stmt.add(10);
    JSON.parse(kind);
  } catch {
    __cov__.stmt.add(11);
    log.push("bad-json");
  }
  __cov__.stmt.add(12);
  return log;
}

