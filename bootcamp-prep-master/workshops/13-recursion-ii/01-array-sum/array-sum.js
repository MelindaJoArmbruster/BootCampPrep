function arraySum(arr) {
  let sum = 0; // declare sum to accept values, initialized to zero
  for (let i = 0; i < arr.length; i++) {
    // cycle thru element of outer array
    let element = arr[i]; // set each elem of array to variable 'element'
    if (Array.isArray(element)) {
      // if that element is an array
      sum += arraySum(element); // add the value of calling func again on the inner array
    } else {
      sum += element; // otherwise, the element must be a number, so add it to sum
    }
  }
  return sum;
}

/*
ALTERNATE SOLUTION: USES ARRAY.FLAT()
function arraySum(arr) {
  let flatArr = arr.flat(Infinity);
  let sum = 0;
  for (let i = 0; i < flatArr.length; i++) {
    sum += flatArr[i];
  }
  return sum;
}
*/
/*
ALTERNATE SOLUTION2: USES ARRAY.REDUCE()
function arraySum(arr) {
  return arr.flat(Infinity).reduce((acc, cur) => acc + cur);
}
*/
