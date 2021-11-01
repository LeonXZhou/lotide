const assert = require('chai').assert;
const middle = require('../middle');

describe('#Middle should return the middle elements of an array',()=>{
  it('[1,2,3,4]) => [2,3]',() => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it('[1,2,3] => [2]',() => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it('[1,2] => []',() => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it('[1] => []',() => {
    assert.deepEqual(middle([1]),[]);
  });
});