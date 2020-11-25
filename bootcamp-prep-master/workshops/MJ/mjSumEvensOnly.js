/*Write a function 'sumEvensOnly' that, given a starting number and ending number, returns the sum of the even 
numbers between the starting and ending numbers.*/

function sumEvensOnly(start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

/*
function sumEvensOnly(startNum, endNum) {
  let sum = 0;
  for (let i = startNum; i < endNum; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
*/
