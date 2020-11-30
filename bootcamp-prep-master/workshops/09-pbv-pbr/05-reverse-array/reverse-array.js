// YOUR CODE BELOW
function reverseArray(arr) {
  let temp = [];
  while (arr.length) {
    //pop elems from end of original array and store them in temp array (order is reversed from orig)
    temp.push(arr.pop());
  }
  while (temp.length) {
    arr.unshift(temp.pop()); //pop elems from end of temp array, inserting them into the beginning of orig array, preserves
    //the reversed order of the temp array
  }
  return arr;
}
