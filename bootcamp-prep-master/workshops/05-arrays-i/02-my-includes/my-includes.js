/*
function myIncludes(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        return (arr.indexOf(searchValue)>= 0) ? true : false;
    }
}
*/

function myIncludes(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) return true;
  }
  return false;
}
