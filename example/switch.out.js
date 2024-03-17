function switchCase(x) {
  __cov__.func.add(0);
  __cov__.stmt.add(0);
  switch (x) {
    case 1:
      __cov__.branch.add(0);
      __cov__.stmt.add(1);
      return 'January';
    case 2:
      __cov__.branch.add(1);
      __cov__.stmt.add(2);
      return 'February';
    case 3:
      __cov__.branch.add(2);
      __cov__.stmt.add(3);
      return 'March';
    case 4:
      __cov__.branch.add(3);
      __cov__.stmt.add(4);
      return 'April';
    case 5:
      __cov__.branch.add(4);
      __cov__.stmt.add(5);
      return 'May';
    case 6:
      __cov__.branch.add(5);
      __cov__.stmt.add(6);
      return 'June';
    case 7:
      __cov__.branch.add(6);
      __cov__.stmt.add(7);
      return 'July';
    case 8:
      __cov__.branch.add(7);
      __cov__.stmt.add(8);
      return 'August';
    case 9:
      __cov__.branch.add(8);
      __cov__.stmt.add(9);
      return 'September';
    case 10:
      __cov__.branch.add(9);
      __cov__.stmt.add(10);
      return 'October';
    case 11:
      __cov__.branch.add(10);
      __cov__.stmt.add(11);
      return 'November';
    case 12:
      __cov__.branch.add(11);
      __cov__.stmt.add(12);
      return 'December';
    default:
      __cov__.branch.add(12);
      __cov__.stmt.add(13);
      return 'Invalid month';
  }
}
