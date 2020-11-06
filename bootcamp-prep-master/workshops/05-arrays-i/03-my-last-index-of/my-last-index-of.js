function myLastIndexOf(arr, searchValue, startIdx = arr.length - 1) {

    for (let i = startIdx; i >= 0; i--) {
        if (arr[i] === searchValue) {
            return i;
        } else {
            return -1;
        }
    }
}
