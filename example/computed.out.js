function computed(arr, x) {
  __cov__.func.add(0);
  var [head = (__cov__.stmt.add(0), x < 0 ? (__cov__.branch.add(0), -x) : (__cov__.branch.add(1), x)), ...rest] = (__cov__.stmt.add(1), arr);
  function getHead([head = (__cov__.stmt.add(2), x >= 0 ? (__cov__.branch.add(2), x) : (__cov__.branch.add(3), -x)), ...rest]) {
    __cov__.func.add(1);
    __cov__.stmt.add(3);
    return head;
  }
  __cov__.stmt.add(4);
  head = getHead(arr);
  __cov__.stmt.add(5);
  if ((x < 0 ? (__cov__.branch.add(4), -x) : (__cov__.branch.add(5), x)) < head) {
    __cov__.branch.add(6);
    __cov__.stmt.add(6);
    return head;
  } else {
    __cov__.branch.add(7);
  }
  __cov__.stmt.add(7);
  getHead(arr);
  let obj = (__cov__.stmt.add(8), { [x < 0 ? (__cov__.branch.add(8), -x) : (__cov__.branch.add(9), x)]: head });
}
