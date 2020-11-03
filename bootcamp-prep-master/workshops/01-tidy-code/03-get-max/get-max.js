// YOUR CODE BELOW
function getMax(first, second, third) {
    if (first > second) {
        if (first > third) {
            return first;
        } 
        return third;
    } else if (second > third) {
        return second;
    } else {
        return third;
    }
}
