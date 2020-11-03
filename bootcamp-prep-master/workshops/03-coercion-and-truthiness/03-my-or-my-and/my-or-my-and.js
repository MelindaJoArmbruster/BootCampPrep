function myOr(arg1, arg2, arg3) {
    if (arg1 != false && arg1 != null) return arg1;
    else if (arg2 != false && arg2 != null) return arg2;
    else if (arg3 != false && arg3 != null) return arg3;
    else return arg3;
}
function myAnd(arg1, arg2, arg3) {
    if (arg1 == false || arg1 === null) return arg1;
    else if (arg2 == false || arg2 === null) return arg2;
    else if (arg3 == false || arg3 === null) return arg3;
    else return arg3;
}
