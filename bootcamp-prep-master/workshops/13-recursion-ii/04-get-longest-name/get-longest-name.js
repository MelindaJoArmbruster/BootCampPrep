function getLongestName(family) {
  let longestName = ""; // set up variable string to be longest name
  for (let name in family) {
    // cycle thru the names(keys) in the family object
    if (name.length > longestName.length) {
      // Evaluate if the name is longer than longest,
      longestName = name; // reassign the longest name to the one we are now looking at
    }
    let value = family[name]; // declare a variable 'value' to represent the value of each name
    if (typeof value === "object") {
      // if the type of value is an object,
      let nestedLongestName = getLongestName(value); // let this variable be the result from that object
      if (nestedLongestName.length > longestName.length) {
        // compare that result to longest, and if longer,
        // reassign longest to that result;
        longestName = nestedLongestName;
      }
    }
  }
  return longestName;
}

/*
function getLongestName(family) {
  let longestName = "";
  for (let name in family) {
    let value = family[name];
    if (typeof value === "object") {
      let nestedLongestName = getLongestName(value);
      if (nestedLongestName.length > longestName.length) {
        longestName = nestedLongestName;
      }
    }
    if (name.length > longestName.length) {
      longestName = name;
    }
  }
  return longestName;
}
*/
