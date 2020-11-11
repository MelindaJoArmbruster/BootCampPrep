function removeColumns(originalGrid, numColumns) {
  let newGrid = []; //declare empty array to accept elements
  for (let i = 0; i < originalGrid.length; i++) {
    //cycle thru each sub array, one at a time
    originalGrid[i].splice(-numColumns); //remove the num of elements starting at index(-numColumns)
    newGrid.push(originalGrid[i]); //push the remaining element(s) onto a new array
  }
  return newGrid;
}
