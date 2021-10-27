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

const letterPositions = function(sentence) {
  const results = {};
  console.log('asdf');
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArrayEqual(letterPositions('hello')['h'],[0]);
assertArrayEqual(letterPositions('hello')['e'],[1]);
assertArrayEqual(letterPositions('hello')['l'],[2,3]);
assertArrayEqual(letterPositions('hello')['o'],[4]);