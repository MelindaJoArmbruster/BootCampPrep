/*function arrayFlattener(arr) {
    if (typeof arr != 'object') {   //had to add this to fix error when arr = string
        return [arr];
    }
    let flatArray = arr.flat();
    return flatArray;
}
*/

//ALTERNATE SOLUTION:

function arrayFlattener(arr) {
  let flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        flatArray.push(element[j]);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
}
