// YOUR CODE BELOW
function mySplice(arr, index, deleteCount, ...args) {
  let startElems = [];
  let deleted = [];
  for (let i = 0; i < index; i++) {
    startElems.push(arr.shift()); //mutates the original array, after this, array now starts at first elem to delete
  }
  for (let i = 0; i < deleteCount; i++) {
    deleted.push(arr.shift()); //store the elem(s) to delete, mutates array again
  }
  for (let i = args.length - 1; i >= 0; i--) {
    //if multiple args will be added, start at the end of the args array
    let currArg = args[i];
    arr.unshift(currArg); //add them one at a time
  }
  for (let i = startElems.length - 1; i >= 0; i--) {
    let currStartElem = startElems[i];
    arr.unshift(currStartElem);
  }
  return deleted;
}
