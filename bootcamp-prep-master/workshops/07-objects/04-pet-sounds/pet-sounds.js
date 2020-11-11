let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },

  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
/*
let animal = "cat",
country = "America";

console.log(animalNoises[1]["cat"]["America"]);
console.log(animalNoises[1].cat.America);
console.log(animalNoises[1][animal][country]);
console.log(animalNoises[1][animal].America);
*/
/*
function petSounds(animal, country) {
  for (let i = 0; i < animalNoises.length; i++) {
    let animalObject = animalNoises[i];
    if (animal in animalObject) {
      console.log(animalObject[animal][country]);
    }
  }
}
*/

//each item in the animalNoises array is an object containing the animal type as a key
//whose value is a NESTED object containing the country/sound key/value pairs.
function petSounds(animal, country) {
  for (let i = 0; i < animalNoises.length; i++) {
    if (animal in animalNoises[i]) {
      console.log(
        `${animal[0].toUpperCase()}${animal.slice(1)}s in ${country} say ${
          animalNoises[i][animal][country]
        }`
      );
    }
  }
}

/*petSounds("chicken", "Germany");
petSounds("cat", "England");
petSounds("dog", "Iceland");

console.log(animalNoises[0]);

let wolf = {
  America: "Woof! Woof!",
  Germany: "Wau Wau!",
  England: "Bow wow!",
  Uruguay: "Jua jua!",
  Afrikaans: "Blaf!",
  Korea: "Mong mong!",
  Iceland: "Voff voff!",
  Albania: "Ham!",
  Algeria: "Ouaf ouaf!",
};
console.log(wolf.America);

//console.log(animalNoises[0]["dog"]["Korea"]);
//console.log(animalNoises[0].dog.Korea);
*/
