// YOUR CODE BELOW
function billerBuilder(state) {
  let stateShipping = 0;
  let stateSalesTax = 0;
  if (state === "NY") {
    stateShipping = 1.03;
    stateSalesTax = 1.04;
  }
  if (state === "NJ") {
    stateShipping = 1.05;
    stateSalesTax = 1.06625;
  }
  return function (price) {
    return price * stateShipping * stateSalesTax;
  };
}

/*
// SOLUTION THAT RETURNS JUST ONE FUNCTION AND USES CLOSURE:

function billerBuilder3(state) {
  return function(price) {
    if (state === 'NY') {
      return price * 1.03 * 1.04;
    }

    return price * 1.05 * 1.06625;
  }
}
*/
/*
ELLIOTT'S SOLUTION:

function billerBuilder(state) {
    function generateBiller(shipping, sales) {
        return (amount) => (amount * shipping * sales)
    }
    switch (state) {
        case 'NY': return generateBiller(1.03, 1.04);
        case 'NJ': return generateBiller(1.05, 1.06625);
        default: return generateBiller(1, 1);
    }
}
*/
