function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    //base case: we have reached the midpoint of the string, so
    return true; // the word must be a palindrome
  } else {
    // otherwise, compare the last char and the first char of the str (after fixing to cap)
    if (str[0].toUpperCase() === str[str.length - 1].toUpperCase()) {
      return isPalindrome(str.slice(1, -1)); //if those chars are same, return results of calling func again with inner portion of str
    } else {
      return false; // otherwise, the compared characters weren't equal
    }
  }
}
