function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    //loop thru keys in obj1
    if (obj1[key] !== obj2[key]) {
      //if the VALUE of any key is different, return false
      return false;
    }
  }
  for (let key in obj2) {
    //loop thru keys in obj2
    if (obj1[key] !== obj2[key]) {
      //if the VALUE of any key is different, return false
      return false;
    }
  }
  return true; //if we got to this step, key/value pairs match
}

// THIS SOLUTION WILL FAIL IF THE KEYS ARE IN DIFFERENT ORDERS WITHIN
//THE OBJECTS    return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;

/* ALTERNATIVE SOLUTION 2: GET ARRAY OF KEYS FOR EACH OBJ, TEST LENGTHS FIRST
THEN IF THEY ARE EQUAL LENGTHS, YOU ONLY HAVE TO LOOP THRU KEYS FOR ONE OF THEM*/
