function backwardString(str) {
  if (str.length === 1) {
    console.log(str);
  } else {
    console.log(str[str.length - 1]);
    backwardString(str.slice(0, -1));
  }
} // YOUR CODE BELOW
