function sort(array) {
  __cov__.func.add(0);
  __cov__.stmt.add(0);
  for (let i = (__cov__.stmt.add(1), 0); i < array.length; i++) {
    let min = (__cov__.stmt.add(2), i);
    __cov__.stmt.add(3);
    for (let j = (__cov__.stmt.add(4), i + 1); j < array.length; j++) {
      __cov__.stmt.add(5);
      if (array[min] > array[j]) {
        __cov__.branch.add(0);
        __cov__.stmt.add(6);
        min = j;
      } else {
        __cov__.branch.add(1);
      }
    }
    __cov__.stmt.add(7);
    if (min !== i) {
      __cov__.branch.add(2);
      let tmp = (__cov__.stmt.add(8), array[i]);
      __cov__.stmt.add(9);
      array[i] = array[min];
      __cov__.stmt.add(10);
      array[min] = tmp;
    } else {
      __cov__.branch.add(3);
    }
  }
  __cov__.stmt.add(11);
  return array;
}
