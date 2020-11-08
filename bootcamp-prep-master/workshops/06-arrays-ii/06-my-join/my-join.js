function myJoin(arr, separator = ',') {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += !arr[i] ? '' : arr[i];
        if (i != arr.length -1) str += separator;
    }
    return str;
}
