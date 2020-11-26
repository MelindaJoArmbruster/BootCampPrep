function myUnshift(arr, value) {
  let newArray = []; //set up empty array to accept elements
  newArray.push(value); // start by pushing the value to be added to beginning

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]); //add all the other elements one at a time
  }
  return newArray; //return the resultant array
}
