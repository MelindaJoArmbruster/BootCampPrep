let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,

  currentInventory: function () {
    let assets = 0;

    for (let key in this) {
      let category = this[key];

      for (let foodType in category) {
        let foodObject = category[foodType];
        assets += foodObject.cost * foodObject.quantity;
      }
    }
    return assets;
  },

  sale: function (order) {
    let orderPrice = 0;

    for (let category in order) {
      let item = order[category];
      orderPrice += this[category][item].cost;
      this[category][item].quantity--;
    }
    this.cash += orderPrice;
    return orderPrice;
  },
};

/*let testOrder = {
  gourmetShell: "hard treat shell",
  gourmetFishFilling: "salmon",
};
console.log(tacoCatInc.sale(testOrder));
*/
/*
Given an
object that represents the inventory of your company, add a method
'currentInventory' to your object that returns the current value of your
company's inventory.

Then, add a sale method that takes an order object, returns the price of the
order, updates the inventory of the purchased items, and adds the price of the
order to the company's cash property.

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};

tacoCat.Inc.sale(order); // => 7
tacoCat.Inc.sale(order); // => 7

tacoCat.gourmetFishFilling.tuna.quantity; // => 98
tacoCat.cash; // => 14

tacoCatInc.currentInventory(); // => 1696
*/
