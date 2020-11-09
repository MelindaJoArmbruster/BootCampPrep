let posTestCase = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

let negTestCase = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

function validSolution(board) {
  //Test Rows
  let copyBoard = board.map((a) => a.slice()); //create deep copy
  for (let i = 0; i < 9; i++) {
    //cycle thru the indiv elements (the subarrays)of the board array
    if (test(copyBoard[i]) === false) return false; //test each subarray with helper function
  }
  //Test Columns
  copyBoard = board.map((a) => a.slice()); //create deep copy
  for (let j = 0; j < 9; j++) {
    //for a given position within the subarrays,
    let tempArr = []; //initialize a blank array to hold elements
    for (let i = 0; i < 9; i++) {
      //cycle thru the indiv elements (the subarrays) of the board array
      tempArr.push(copyBoard[i][j]); //push the element from each subarray into the tempArray
    }
    if (test(tempArr) === false) return false; //test each temp array with helper function
  }
  //Test Squares
  copyBoard = board.map((a) => a.slice()); //create deep copy
  for (let x = 0; x < 3; x++) {
    //divide x axis into three blocks (with positions 0, 1, 2), cycle thru each
    for (let y = 0; y < 3; y++) {
      //divide y axis into three blocks (with positions 0, 1, 2), cycle thru each
      let tempArr = []; //initialize a blank array to hold indiv elements
      for (let i = x * 3; i < x * 3 + 3; i++) {
        //beginning with position 0, incrementing +1 each cycle, until i is +3 above starting value, when we break out of this loop
        for (let j = y * 3; j < y * 3 + 3; j++) {
          //beginning with position 0, incrementing +1 each cycle, until j is +3 above starting value, when we break out of this loop
          tempArr.push(copyBoard[i][j]); //push the elements into the tempArray
        }
      }
      if (test(tempArr) === false) return false; //test each temp array with helper function
    }
  }

  //Helper Function
  function test(testArray) {
    return testArray.sort((a, b) => a - b).join("") === "123456789" //take the array to be tested, sort it numerically, make it into a string, then compare to reference string
      ? true //if tested array (now a string) is exactly the same, the tested array is valid so return true
      : false; //if tested array (now a string) isn't exactly the same, the tested array is not valid so return false
  }
  return true; // you end up here when the row tests, the column tests, and the square tests have all passed, so whole board must be truly valid
}

console.log(validSolution(posTestCase));
console.log(validSolution(negTestCase));
