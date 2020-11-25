function allSystemsGo(systems) {
  for (let key in systems) {
    let value = systems[key];
    if (typeof value === "object") {
      let subs = allSystemsGo(value);
      if (subs === false) {
        return false;
      }
    }
    if (value === false) {
      return false;
    }
  }
  return true;
}

/*
function allSystemsGo(systems) {
  for (let key in systems) {
    // cycle thru the keys in the systems object
    let value = systems[key]; // declare the value of each key as 'value'
    if (typeof value === "object") {
      //if the value is itself an object, assign
      let subSystemResult = allSystemsGo(value); // the results of those subsytems to a var
      if (subSystemResult === false) {
        // if the results come back false, return false;
        return false;
      }
    } //otherwise the value was a boolean, and if it is false, return false
    if (value === false) {
      return false;
    }
  } //if we got thru the above tests without a false, all systems are a go
  return true;
}
*/
/*
function allSystemsGo(systems) {
  for (let key in systems) {
    let value = systems[key];
    if (typeof value === "object") {
      value = allSystemsGo(value); //overwrite the value with the result of calling func again
    }
    if (!value) {
      return false;
    }
  }
  return true;
}
*/
/*
function allSystemsGo(systems) {
  for (let key in systems) {
    let value = systems[key];
    if (typeof value === "object") {
      value = allSystemsGo(value);
      if (value === false) {
        return false;
      }
    } else {
      if (value === false) {
        return false;
      }
    }
  }
  return true;
}
*/
