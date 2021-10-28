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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅   Assertion Passed: ${actual} (${typeof(actual)}) === ${expected} (${typeof(expected)})`);
  } else {
    console.log(`⚠️   Assertion Failed: ${actual} (${typeof(actual)}) !== ${expected} (${typeof(expected)})`);
  }
};

function translateToPigLatin(word) {
  return word.slice(1, word.length) + word[0] + "ay";
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

assertArrayEqual(map(words, word => word[0]),['g','c','t','m','t']);
assertArrayEqual(map(words, word => {return word.length}),[6,7,2,5,3])
assertArrayEqual(map(words, word => {return translateToPigLatin(word)}),['roundgay','ontrolcay','otay','ajormay','omtay'])