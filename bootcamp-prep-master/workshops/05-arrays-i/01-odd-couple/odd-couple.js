function oddCouple(arr) {
    let oddArr = [];
    let oddCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1 && oddCount < 2) {
            oddArr.push(arr[i]);
            oddCount++;
        }
    }
    return oddArr;
}