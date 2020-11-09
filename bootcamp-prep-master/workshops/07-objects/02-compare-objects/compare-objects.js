function compareObjects(obj1, obj2) {
  let keysObj1 = Object.keys(obj1);
  let keysObj2 = Object.keys(obj2);
  if (keysObj1.length != keysObj2.length) return false;
  for (let i = 0; i < keysObj1.length; i++) {
    if (keysObj1[i] != keysObj2[i]) return false;
    if (obj1[keysObj1[i]] != obj2[keysObj2[i]]) return false;
  }

  return true;

  //return JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;
}
