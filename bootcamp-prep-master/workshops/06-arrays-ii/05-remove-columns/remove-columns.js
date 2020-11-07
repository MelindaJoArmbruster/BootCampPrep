function removeColumns(originalGrid, numColumns) {
    let newGrid = [];
    for (let i = 0; i < originalGrid.length; i++){
        let remaining = originalGrid[i].splice(-numColumns, numColumns);
        newGrid.push(remaining);
    }
    return newGrid;
}
//////I ALSO HAVE NO IDEA WHY THIS ONE ISN'T WORKING