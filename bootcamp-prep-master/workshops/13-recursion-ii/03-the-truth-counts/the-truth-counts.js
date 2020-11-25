function theTruthCounts(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];

    if (Array.isArray(currElem)) {
      count += theTruthCounts(currElem);
    } else {
      if (currElem) count++;
    }
  }
  return count;
}

/*
function theTruthCounts(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      count += theTruthCounts(element);
    } else {
      if (element) {
        count++;
      }
    }
  }
  return count;
}
*/
/*
function theTruthCounts(arr) {
  let flatArr = arr.flat(Infinity);
  let count = 0;
  for (let i = 0; i < flatArr.length; i++) {
    if (flatArr[i]) {
      count++;
    }
  }
  return count;
}
*/
