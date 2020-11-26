function myLastIndexOf(arr, searchValue, startIndex = arr.length - 1) {
  for (let i = startIndex; i >= 0; i--) {
    if (arr[i] === searchValue) return i;
  }
  return -1;
}

/*
function myLastIndexOf(arr, searchValue, startIdx = arr.length - 1) {

    for (let i = startIdx; i >= 0; i--) {
        if (arr[i] === searchValue) {
            return i;
        }
    }
    return -1;
}
*/
