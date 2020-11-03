function crazyCaps(str) {
    let result = '';
    result += str[0];
    for (let i = 1; i < str.length; i++) {
        if (i % 2 > 0) {
            result += str.substring(i, i+1).toUpperCase();
        } else {
            result += str.substring(i, i+1);
        }
    }
    return result;
}
// YOUR CODE BELOW
