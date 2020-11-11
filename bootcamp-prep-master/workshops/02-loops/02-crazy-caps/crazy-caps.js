function crazyCaps(str) {
    let result = '';
    result += str[0].toLowerCase();
    for (let i = 1; i < str.length; i++) {
        if (i % 2 === 1) {
            result += str.substring(i, i+1).toUpperCase();
        } else {
            result += str.substring(i, i+1).toLowerCase();
        }
    }
    return result;
}
// YOUR CODE BELOW
