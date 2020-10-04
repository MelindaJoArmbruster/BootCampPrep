// YOUR CODE BELOW
//Define a function, `defaultGreet`, that takes a first and a last name.
//`defaultGreet` should return a string greeting for the given names. If the user
//does not define a last name, assume the last name is 'Doe'.
function defaultGreet (firstName, lastName) {
    if (!lastName) lastName = "Doe";
    return "Hi " + firstName + " " + lastName + "!";
}

