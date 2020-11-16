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
