function mySlice(arr, start = 0, end = (arr.length)) {
    let slicedArr = [];
    if (start >= 0 && end >= 0) {
        for (let i = start; i < end; i++) {
        slicedArr.push(arr[i]);
        }
    }
    if (start < 0) {
        for (let i = (arr.length + start); i < end; i++) {
            slicedArr.push(arr[i]);
        }
    }
    if (end < 0) {
        for (let i = start; i < (arr.length + end); i++) {
            slicedArr.push(arr[i]);
        }
    }
    return slicedArr;
}
