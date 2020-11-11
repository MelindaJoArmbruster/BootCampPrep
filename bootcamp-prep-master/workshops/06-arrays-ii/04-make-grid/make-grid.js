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
