/*let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];
*/
//sumTransactions(transactions)  => 10512

function lastFridayNight(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    // added this to handle the test case which passed in non-array
  } else {
    sum = arr.reduce((accum, current) => accum + current.amount, 0);
  }
  console.log(arr.length);
  return sum;
}

//console.log(lastFridayNight(transactions));
