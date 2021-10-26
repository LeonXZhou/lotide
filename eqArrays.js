const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2 [i]) {
      return false;
    }
  }
  return true;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅   Assertion Passed: ${actual} (${typeof(actual)}) === ${expected} (${typeof(expected)})`);
  } else {
    console.log(`⚠️   Assertion Failed: ${actual} (${typeof(actual)}) !== ${expected} (${typeof(expected)})`);
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); 
assertEqual(eqArrays([1, 2], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); 
assertEqual(eqArrays([1], [1, 2, 3]), true); 
assertEqual(eqArrays([], []), true); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 0]), true); 