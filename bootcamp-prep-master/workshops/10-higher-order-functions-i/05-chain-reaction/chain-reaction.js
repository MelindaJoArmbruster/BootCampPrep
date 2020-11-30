// YOUR CODE BELOW
function chainReaction(startVal, arr) {
  for (let i = 0; i < arr.length; i++) {
    let currFunc = arr[i]; //let callback = arr[i];
    let currResult = currFunc(startVal); //line not needed in Elliot's solution
    startVal = currResult; //startVal = callback(startVal);
  }
  return startVal;
}

/*
function chainReaction(startVal, arr) {
    arr.forEach((callback) => {
        startVal = callback(startVal);
    })
    return startVal;
}
*/
