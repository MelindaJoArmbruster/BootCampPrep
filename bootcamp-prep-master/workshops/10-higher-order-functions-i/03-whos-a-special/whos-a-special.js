// YOUR CODE BELOW
function whosASpecial(specialPets) {
  let results = "";
  specialPets.forEach(function (petObj, idx) {
    results += petObj.name + " the " + petObj.species + " is very special!";
    if (idx < specialPets.length - 1) {
      results += " ";
    }
  });
  return results;
}
