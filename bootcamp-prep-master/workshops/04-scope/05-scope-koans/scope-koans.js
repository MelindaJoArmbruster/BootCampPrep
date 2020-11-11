// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = "test failing";

function testOne(testOneMessage) {
  //testOneMessage = 'test succeeding';
  //instead, just return what it is passed, which was 'test succeeding'
  return testOneMessage;
}

// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = "test failing";

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) {
  testTwoMessage = "test succeeding";
  return a;
}

// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = "test failing";

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = "test succeeding"; //thisThreeMessage is locally scoped within the if statement
  }

  let msg = getMessage();
  return msg;

  function getMessage(value) {
    if (!value) {
      //I added the ! to this line, that's my only change to the code//
      return testThreeMessage;
    }

    return "test failing";
  }
}

// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = "test succeeding";

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg;

    function doubleInner(msg) {
      //alternately, could have chgd this msg to ms without chg anything else
      testFourMessag = msg; //change testFourMessage to stop overwriting the initialized value
      return testFourMessage;
    }

    testFourMessage = doubleInner("test failing");
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}
