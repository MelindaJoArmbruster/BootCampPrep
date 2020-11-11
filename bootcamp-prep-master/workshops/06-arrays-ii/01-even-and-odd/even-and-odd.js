function evenAndOdd(arr) {
  let finalArray = [];
  let evenArray = [];
  let oddArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
    if (arr[i] % 2 === 1) {
      oddArray.push(arr[i]);
    }
  }

  finalArray.push(evenArray);
  finalArray.push(oddArray);
  return finalArray;
}
//Alternately, lines 15-17 could be condensed to:
//return [evenArray, oddArray];
