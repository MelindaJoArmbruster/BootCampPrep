// YOUR CODE BELOW
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];
    callback(currElem, i);
  }
}
