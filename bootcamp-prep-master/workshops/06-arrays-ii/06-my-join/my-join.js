function myJoin(arr, separator = ",") {
  let str = ""; //declare empty string to receive array elements
  for (let i = 0; i < arr.length; i++) {
    //cycle thru elements of the array
    str += !arr[i] ? "" : arr[i]; //if arr[i] is false, cocat "", else concat the element
    if (i != arr.length - 1) str += separator; // if you aren't at the last index of the array, concat the separator too
  }
  return str;
}
