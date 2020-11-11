function bacteriaTime(currentNum, targetNum) {
    let counter = 0;
    if (targetNum < currentNum) {
        return 'targetNum must be larger than currentNum';
    }
    while (currentNum < targetNum) {
        currentNum *= 2;
        counter += 20;
        
    }
    
    return counter;
}
