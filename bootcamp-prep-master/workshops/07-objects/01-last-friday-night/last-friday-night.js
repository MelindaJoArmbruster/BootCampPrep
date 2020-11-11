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

function lastFridayNight(transactions) {
  let sum = 0;

  for (let i = 0; i < transactions.length; i++) {
    let currentTransaction = transactions[i];
    sum += currentTransaction.amount;
  }
  return sum;
}

//console.log(lastFridayNight(transactions));
