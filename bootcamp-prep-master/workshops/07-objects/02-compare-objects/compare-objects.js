function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    //loop thru keys in obj1
    if (obj1[key] !== obj2[key]) {
      //if the value of any key is different, return false
      return false;
    }
  }
  for (let key in obj2) {
    //loop thru keys in obj2
    if (obj2[key] !== obj1[key]) {
      //if the value of any key is different, return false
      return false;
    }
  }
  return true; //if we got to this step, key/value pairs match
}

//return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
