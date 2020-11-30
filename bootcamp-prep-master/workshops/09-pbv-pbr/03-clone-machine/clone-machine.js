// NOT YET WORKING -
function cloneMachine(parent) {
  let clone = {
    name: parent.name + "Clone",
    species: parent.species,
    offspring: [],
  };
  parent.offspring.push(clone.name);
  return clone;
}
