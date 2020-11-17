let testSentence = "Joe Biden * the * * * Trump.";
let testWords = ["took", "tulip"];

function madLibs(sentence, words) {
  let newSentence = "";
  let arr = sentence.split("*");

  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];
    newSentence += currElem;
    if (i < arr.length - 1) {
      newSentence += words[i % words.length];
    }
  }

  return newSentence;
}

console.log(madLibs(testSentence, testWords));
console.log(0 % 4);
console.log(1 % 4);
console.log(2 % 4);
console.log(3 % 4);
console.log(4 % 4);
console.log(5 % 4);
