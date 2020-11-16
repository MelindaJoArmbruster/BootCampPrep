function sumNums(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumNums(num - 1);
  }
}
