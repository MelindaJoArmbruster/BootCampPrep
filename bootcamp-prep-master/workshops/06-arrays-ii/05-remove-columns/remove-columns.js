//MY SOLUTION: USES SPLICE, RETURNS A NEW GRID

function removeColumns(originalGrid, numColumns) {
  let newGrid = []; //declare empty array to accept elements
  for (let i = 0; i < originalGrid.length; i++) {
    //cycle thru each sub array, one at a time
    originalGrid[i].splice(-numColumns); //remove the num of elements starting at index(-numColumns)
    newGrid.push(originalGrid[i]); //push the remaining element(s) onto a new array
  }
  return newGrid;
}
/*  ALTERNATE SOLUTION: USES POP INSTEAD OF SPLICE, IT ACTUALLY RETURNS THE ORIGINAL GRID (NOW MUTATED BY POP)

function removeColumns(grid, numColumns) {

  // loop through every row in the grid
  for (let i = 0; i < grid.length; i++) {

    // for every column to remove...
    for (let j = 0; j < numColumns; j++) {

      // pop one colum/cell off of the current row
      grid[i].pop();
    }
  }
  return grid;
}
*/
