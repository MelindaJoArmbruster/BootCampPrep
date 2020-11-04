function exponentiate(b, p) {
    if (p === 0) {
        return 1;
    } else {
        return b**p;
    }
}

/*
Alternate Solution:

function exponentiate(base,power) {
    if (power === 0) {
        return 1;
    }
    let result = base;
    while (power > 1) {
        result *= base;
        power--;
    }
    return result;
}