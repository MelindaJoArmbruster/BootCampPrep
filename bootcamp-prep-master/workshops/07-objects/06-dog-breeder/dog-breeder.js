function dogBreeder(name, age) {
  if (age === undefined) {
    // if no age give, check if the 'name' passed in
    if (typeof name === "number") {
      //was actually a number (age), if so,
      age = name; // set the age to be the 'name' passed in and name to nothing for now
      name = null;
    } else {
      // otherwise, if the name really was a name, set the age to default
      age = 0;
    }
  }
  if (!name) {
    //if we have no name, set to default
    name = "Steve";
  }
  let newDog = {
    //declare new dog object with two key/value pairs
    name: name,
    age: age,
  };
  return newDog;
}
