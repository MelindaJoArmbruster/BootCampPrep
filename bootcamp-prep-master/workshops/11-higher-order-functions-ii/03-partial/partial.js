// YOUR CODE BELOW

function partial(callback, argA) {
  return function (argB) {
    return callback(argA, argB);
  };
}
