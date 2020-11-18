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
