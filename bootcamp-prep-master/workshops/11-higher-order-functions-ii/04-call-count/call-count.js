// YOUR CODE BELOW
function callCount() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
