function arrayFlattener(arr) {
    if (typeof arr != 'object') {   //had to add this to fix error when arr = string
        return [arr];
    }
    let flatArray = arr.flat();
    return flatArray;
}
