// YOUR CODE BELOW
function onlyOdds(num) {
    let sum = 0;
    if (num < 1) {
        return 0;
    } else {
        for (let i = 1; i < num; i+=2) {
            sum += i;
        }
        return sum;
    }
}