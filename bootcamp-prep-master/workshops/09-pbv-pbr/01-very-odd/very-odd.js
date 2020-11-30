// YOUR CODE BELOW
function veryOdd(arr) {
  let oddNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNums.push(arr[i]);
    }
  }
  return oddNums;
}
