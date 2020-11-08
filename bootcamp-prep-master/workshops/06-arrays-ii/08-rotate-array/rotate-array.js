function rotateArray(originalArray, rotateNum) {
    let rotated = [];
    if (rotateNum === 0) {
        return originalArray;
    } else if (rotateNum > 0) {
        let begin = originalArray.slice(-rotateNum);
        let end = originalArray.slice(0,(originalArray.length -rotateNum));
        rotated = begin.concat(end);
    } else {
        let begin = originalArray.slice(-1*rotateNum);
        let end = originalArray.slice(0,(-rotateNum));
        rotated = begin.concat(end);
    }
    return rotated;
}
//rotateArray(['first', 'second', 'third', 'fourth'], 1);
