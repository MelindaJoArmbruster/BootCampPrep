let bond = "007";

function oddJob() {
  let AgentinScope = bond === "007";
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

//I don't quite get this one
function goldFinger(bond) {
  let AgentinScope = bond === "007";
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

//This one is particularly confusing/////////
function scaramanga(target) {
  target = bond;
  let AgentinScope = bond === "007";
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

function drNo() {
  let bond = "Body Double";
  let AgentinScope = bond === "007";
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

function jaws(agent) {
  agent = bond;
  bond = "Body Double";

  let AgentinScope = agent === "007";
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

function elChiffre() {
  let agent = bond;
  bond = "Body Double";
  let AgentinScope = agent === "007";
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}
