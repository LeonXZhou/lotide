const assertArrayEqual = require('../assertArrayEqual');
const tail = require('../tail');

console.log(tail([1]));
console.log(tail([]));
assertArrayEqual(tail([1,1,3]),[1,3]);
assertArrayEqual(tail([1]),[]);

//testing unmodified original array
let originalArray = [1,2,3,4,5];
tail(originalArray);
assertArrayEqual(originalArray,[1,2,3,4,5]);