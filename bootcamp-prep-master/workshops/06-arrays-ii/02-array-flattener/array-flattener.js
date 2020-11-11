function arrayFlattener(arr) {
  let flatArray = []; //declare empty array to accept elements

  for (let i = 0; i < arr.length; i++) {
    //loop thru elements of outer array
    let element = arr[i]; //assign each element of outer array to the variable element
    if (Array.isArray(element)) {
      //if the given element is an array,
      for (let j = 0; j < element.length; j++) {
        //cycle thru its contents
        flatArray.push(element[j]); //pushing each into the resultant array we declared earlier
      }
    } else {
      //othervise, the element isn't an array so just push it as-is into flatArray
      flatArray.push(element);
    }
  }
  return flatArray;
}
