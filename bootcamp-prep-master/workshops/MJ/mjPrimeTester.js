function isPrime(num) {
  if (num === 1 || num === 2) {
    return true;
  }
  let gpd = Math.ceil(Math.sqrt(num));
  for (let i = gpd; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(100));
console.log(isPrime(37));
