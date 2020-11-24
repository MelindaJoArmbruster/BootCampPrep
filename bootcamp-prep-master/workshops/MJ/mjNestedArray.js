function nestingBird(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];
    if (Array.isArray(currElem)) {
      result += nestingBird(currElem);
    } else {
      result += currElem;
    }
  }
  return result;
}
console.log(nestingBird(["r", "o", ["b", ["i"], "n"]]));

/* THIS SOLUTION WAS NOT WORKING FOR SOME REASON
function nestingBird(arr) {
  let result = "";
  let flatArr = arr.flat(Infinity);
  for (let i = 0; i < flatArr.length; i++) {
    result += flatArr[i];
  }
  return result;
}
console.log(nestingBird(["r", "o", ["b", ["i"], "n"]]));
*/
