/*Write a function 'largestThreeDigitNum' that, given a string of digits between 1 and 9, 
will return the largest three-digit number from the given string.*/

function largestThreeDigitNum(str) {
  let largest = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (Number(str.slice(i, i + 3)) > largest) {
      largest = Number(str.slice(i, i + 3));
    }
  }
  return largest;
}

/*
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
*/
