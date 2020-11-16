/*
function countVowels(str) {
  if (str.length === 1) {
    if (
      str.toUpperCase() === "A" ||
      str.toUpperCase() === "E" ||
      str.toUpperCase() === "I" ||
      str.toUpperCase() === "O" ||
      str.toUpperCase() === "U"
    ) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (
      str[str.length - 1].toUpperCase() === "A" ||
      str[str.length - 1].toUpperCase() === "E" ||
      str[str.length - 1].toUpperCase() === "I" ||
      str[str.length - 1].toUpperCase() === "O" ||
      str[str.length - 1].toUpperCase() === "U"
    ) {
      return 1 + countVowels(str.slice(0, -1));
    } else {
      return 0 + countVowels(str.slice(0, -1));
    }
  }
}
*/
function countVowels(string) {
  if (string.length === 0) {
    return 0;
  }

  let numVowels = 0;

  // if the first letter is a vowel...
  if (isAVowel(string[0])) {
    numVowels += 1;
  }
  numVowels += countVowels(string.slice(1));
  return numVowels;
}

// helper function that returns true if the character is a vowel
function isAVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
