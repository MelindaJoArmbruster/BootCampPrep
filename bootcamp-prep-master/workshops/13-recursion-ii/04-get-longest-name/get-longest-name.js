/*
function getLongestName(family) {
  let longestName = "";
  //console.log(family);
  for (let name in family) {
    if (name.length > longestName.length) {
      longestName = name;
    }
    //console.log(key);
    let value = family[name];
    if (typeof value === "object") {
      let nestedLongestName = getLongestName(value);
      if (nestedLongestName.length > longestName.length) {
        longestName = nestedLongestName;
      }
    }
  }
  return longestName;
}
*/

function getLongestName(family) {
  let longestName = "";
  //console.log(family);
  for (let name in family) {
    //console.log(key);
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
