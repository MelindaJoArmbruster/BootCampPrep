
//let falsy = [false, 0, -0, '', null, undefined, NaN];

function onlyOne(arg1, arg2, arg3) {
    let trueCounter = 0;
    if (arg1) trueCounter++;
    if (arg2) trueCounter++;
    if (arg3) trueCounter++;
    if (trueCounter != 1) {
        return false;
    } else {
        return true;
    }
}
