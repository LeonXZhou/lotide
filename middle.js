const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅   Assertion Passed: ${actual} (${typeof (actual)}) === ${expected} (${typeof (expected)})`);
  } else {
    console.log(`⚠️   Assertion Failed: ${actual} (${typeof (actual)}) !== ${expected} (${typeof (expected)})`);
  }
};

const middle = function(array) {
  const output = [];
  if (array.length <= 2) {
    return output;
  }
  for (let i = Math.floor((array.length/2.0)-.5); i <= Math.floor((array.length/2.0)); i++)
  {
    output.push(array[i]);
  }
  return output;
};

assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1]),[]);