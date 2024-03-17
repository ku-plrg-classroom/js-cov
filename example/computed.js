function computed(arr, x) {
  var [head = (x < 0 ? -x: x), ...rest] = arr;
  function getHead([head = (x >= 0? x: -x), ...rest]) {
    return head;
  }
  head = getHead(arr);
  if ((x < 0 ? -x : x) < head) {
    return head;
  }
  getHead(arr);
  let obj = { [x < 0 ? -x : x]: head };
}
