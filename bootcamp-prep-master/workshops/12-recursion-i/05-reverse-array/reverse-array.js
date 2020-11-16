function reverseArray(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return arr.slice(-1).concat(reverseArray(arr.slice(0, -1)));
  }
}

/*
function reverseArray(array) {
  // base case: if the array has a length of 1, the reverse of the array is the array itself
  if (array.length === 1) {
    // however, we have to make sure we're returning a copy of the original array
    return array.slice();
  } else {
    // recursive case: array.length must get closer to one
    let newArray = [];

    // the first element in newArray should be the last element in array
    let lastElement = array[array.length - 1];
    newArray.push(lastElement);

    // get the reversed array for the remaining elements (slicing off the last element, since we've already handled it)
    let reversedRemainingElements = reverseArray(array.slice(0, -1));

    // concat the remaining elements onto our new array
    newArray = newArray.concat(reversedRemainingElements);

    return newArray;
  }
}
*/
