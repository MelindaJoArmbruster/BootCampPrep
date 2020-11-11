function makeGrid(numColumns, numRows) {
    let newArr = [];
    let masterArr = [];
    for (let i = 0; i < numRows; i++){ 
        for (let j = 0; j < numColumns; j++) {
            newArr.push(j+1);
        }
        masterArr.push(newArr);
        newArr = [];
    }
    return masterArr;
    
}
/* Alternate Solution:
function makeGrid(numColumns, numRows) {
  let grid = [];

  // each iteration of the outer for loop creates and adds a new row to the grid
  for (let i = 0; i < numRows; i++) {

    // create a new row
    let row = [];

    // each iteration of the inner loop adds a new column/cell to the new row
    for (let j = 0; j < numColumns; j++) {

      // push the correct cell number into the new row
      row.push(j + 1);
    }

    // push the new row into the grid
    grid.push(row);
  }

  // return the finished grid outside of the for loops
  return grid;