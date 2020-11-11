function oddCouple(arr) {
  let oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && oddArr.length < 2) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}
