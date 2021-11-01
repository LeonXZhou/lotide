const middle = require('../middle');
const assertArrayEqual = require('../assertArrayEqual');

assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1,2,3]),[2]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1]),[]);