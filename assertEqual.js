// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("⚠️  Assertion Passed: " + actual + " (" + typeof(actual) + ")" + " === " + expected + " (" + typeof(expected) + ")");
  } else {
    console.log("✅  Assertion Passed: " + actual + " (" + typeof(actual) + ")" + " !== " + expected + " (" + typeof(expected) + ")");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('I like pie', 'I like pie');
assertEqual(2,4);
assertEqual(2,'2');