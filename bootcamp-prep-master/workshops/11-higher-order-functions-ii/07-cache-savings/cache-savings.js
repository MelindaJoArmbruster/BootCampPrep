// YOUR CODE BELOW
function cacheSavings(callback) {
  let results = {};
  return function (arg) {
    if (!(arg in results)) {
      let callbackResult = callback(arg);
      results[arg] = callbackResult;
    }
    return results[arg];
  };
}
