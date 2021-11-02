// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2 [i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArrayEqual = function(actual, expected) {
//   if (eqArrays(actual,expected)) {
//     console.log(`✅   Assertion Passed: ${actual} (${typeof(actual)}) === ${expected} (${typeof(expected)})`);
//   } else {
//     console.log(`⚠️   Assertion Failed: ${actual} (${typeof(actual)}) !== ${expected} (${typeof(expected)})`);
//   }
// };

const takeUntil = function(array, callback) {
  let i = 0;
  let results = [];
  while (!callback(array[i]) && i < array.length) {
    results.push(array[i]);
    i++;
  }
  return results;
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArrayEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood'])
// assertArrayEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2])