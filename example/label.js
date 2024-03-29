function label() {
  label: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (j === 5) break label;
    }
  }
}
