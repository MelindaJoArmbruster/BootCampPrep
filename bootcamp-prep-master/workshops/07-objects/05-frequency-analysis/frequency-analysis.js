// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let object = {}; //declare empty object to be filled
  for (let i = 0; i < str.length; i++) {
    //loop thru given string
    let currChar = str[i]; //assign the current letter to variable
    if (currChar in object) {
      //if the key is already in object,increment value +1
      object[currChar]++;
    } else {
      //otherwise, add the key/value pair to the object with value of 1
      object[currChar] = 1;
    }
  }
  return object;
}
