function largestThreeDigitNum(str) {
  let largestNum = 0;
  for (let i = 1; i < str.length - 2; i++) {
    let currNum = Number(str.slice(i, i + 3));
    if (currNum > largestNum) {
      largestNum = currNum;
    }
  }
  return largestNum;
}
