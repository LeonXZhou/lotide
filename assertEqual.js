// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅   Assertion Passed: ${actual} (${typeof(actual)}) === ${expected} (${typeof(expected)})`);
  } else {
    console.log(`⚠️   Assertion Failed: ${actual} (${typeof(actual)}) !== ${expected} (${typeof(expected)})`);
  }
};

module.exports = assertEqual;
