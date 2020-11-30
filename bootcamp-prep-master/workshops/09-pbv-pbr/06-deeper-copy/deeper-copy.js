// YOUR CODE BELOW
function deeperCopy(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];
    if (Array.isArray(currElem)) {
      //if the currElem is an array,
      let nestedArr = [];
      for (let j = 0; j < currElem.length; j++) {
        nestedArr.push(currElem[j]); //copy the elements of it to a new variable,
      }
      copy.push(nestedArr); //then push the nested array into the copy array
    } else {
      copy.push(currElem); //otherwise, just push the currElem into the copy array
    }
  }
  return copy;
}
