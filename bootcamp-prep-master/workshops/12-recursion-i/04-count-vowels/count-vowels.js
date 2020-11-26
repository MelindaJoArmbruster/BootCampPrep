/*
function countVowels(string) {
  if (string.length === 0) {
    return 0;
  }

  let numVowels = 0;

  // if the first letter is a vowel...
  if (isAVowel(string[0])) {
    // or let vowels = "aeiou" (outside the if) then check if vowels.includes(string[0])
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
*/
function countVowels(str) {
  if (!str.length) return 0;

  str = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  let firstChar = str[0];
  let rest = str.slice(1);

  if (vowels.includes(firstChar)) {
    count += 1;
  }
  count += countVowels(rest);

  return count;
}
