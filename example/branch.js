function branch(fname, arg) {
  const funcs = {
    // LogicalExpression
    cond: x => {
      let b = x < 0;
      b = b && b;
      b = b || b;
      b = b ?? b;
      b = !b;
      b = b ? b : b;
      b = ((b || b) || (b && b) && (b ?? b)) ?? !b;
      b = (b && b) ? ((b || b) ? b : b) : (b ?? b) ? b : b;
      b = b?.c;
    },
    // IfStatement
    abs: x => {
      if (x >= 0) return x;
      else return -x;
    },
    // ConditionalExpression
    shortAbs: x => x >= 0 ? x : -x,
  };
  try {
    return funcs[fname](arg);
  } catch (e) {
    return null;
  }
}
