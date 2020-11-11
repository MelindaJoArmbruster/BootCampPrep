/*
let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]],
    ['NAMO', ['fish', 5]]
  ];
for (let i = 0; i < myZoo.length; i++) {
  newArr[i] = `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}.`;
}
*/

function zooInventory(myZoo) {
  let newArr = [];
  for (let i = 0; i < myZoo.length; i++) {
    newArr.push(`${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}.`);
  }
  return newArr;
}
