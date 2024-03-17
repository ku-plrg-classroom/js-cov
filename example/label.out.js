function label() {
  __cov__.func.add(0);
  __cov__.stmt.add(0);
  label: {
    __cov__.stmt.add(1);
    for (var i = (__cov__.stmt.add(2), 0); i < 10; i++) {
      __cov__.stmt.add(3);
      for (var j = (__cov__.stmt.add(4), 0); j < 10; j++) {
        __cov__.stmt.add(5);
        if (j === 5) {
          __cov__.branch.add(0);
          __cov__.stmt.add(6);
          break label;
        } else {
          __cov__.branch.add(1);
        }
      }
    }
  }
}
