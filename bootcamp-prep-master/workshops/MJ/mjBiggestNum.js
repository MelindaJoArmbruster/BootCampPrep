//let nums = [17, [03, 49], [43, [94], [62]]]; Write function to find the biggest Num in
//this deeply nested array

function findBiggestNum(nums) {
  let biggestNum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currElem = nums[i];
    if (Array.isArray(currElem)) {
      let nestedBiggest = findBiggestNum(currElem);
      if (nestedBiggest > biggestNum) {
        biggestNum = nestedBiggest;
      }
    } else {
      if (currElem > biggestNum) {
        biggestNum = currElem;
      }
    }
  }
  return biggestNum;
}

console.log(findBiggestNum([17, [03, 49], [43, [94], [62]]]));
