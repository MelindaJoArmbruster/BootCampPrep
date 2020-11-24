/*
function exponentiate(b, p) {
    if (p === 0) {
        return 1;
    }
    let result = b;
    while (p >1) {
        result *= b;
        p--;
    }
    return result;
}
*/

//Alternate Solution:

function exponentiate(base, power) {
  if (power === 0) {
    return 1;
  }
  let result = base;
  while (power > 1) {
    result *= base;
    power--;
  }
  return result;
}
