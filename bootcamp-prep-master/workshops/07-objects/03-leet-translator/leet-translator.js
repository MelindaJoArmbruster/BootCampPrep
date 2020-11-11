let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "/\\/",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

//First added another \ to the leet 'n' so it would translate right
//then created an empty object

let leetCodex = {};

for (let i = 0; i < letters.length; i++) {
  //for each element in letters,
  leetCodex[letters[i]] = leetChars[i]; //assigned the value of the corresponding leet to
  //the letter key inside the leetCodex object
}

function leetTranslator(str) {
  strLC = str.toLowerCase(); //made the string lowercase
  let rString = ""; //declared an empty resultant string
  for (let i = 0; i < strLC.length; i++) {
    //cycled thru each char of the string
    if (leetCodex[strLC[i]]) rString += leetCodex[strLC[i]];
    //if char/key is found in Codex, add to result string
    else rString += strLC[i]; //otherwise, just add the char as-is in original (lc) string
  }
  return rString;
}
