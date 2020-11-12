function dogBreeder(name, age) {
  let newDog = {}; // declare new object

  if (typeof name != "string") {
    //if param given was a number (not a string)
    age = name; //set the given param to the age
    name = "Steve"; //set  the name to the default value
  }
  if (name === undefined) {
    // if name is undefined,
    name = "Steve"; //set name to default value
  }
  newDog["name"] = name; // add key/value pair to the newDog object

  if (age === undefined) {
    // if age is undefined.
    age = 0; //set age to default value
  }
  newDog["age"] = age; // add key/value pair to the newDog object

  return newDog;
}
