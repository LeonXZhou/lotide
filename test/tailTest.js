const assert = require('chai').assert;
const tail = require('../tail');

// console.log(tail([1]));
// console.log(tail([]));
// assertArrayEqual(tail([1,1,3]),[1,3]);
// assertArrayEqual(tail([1]),[]);

//testing unmodified original array
// let originalArray = [1,2,3,4,5];
// tail(originalArray);
// assertArrayEqual(originalArray,[1,2,3,4,5]);

describe('#tail should return all elements of an array except the first one', ()=>{
  it('[1] => []',()=>{
    assert.deepEqual(tail([1,1,3]),[1,3])
  });
  it('[1,2,3,4,5] => [2,3,4,5]',()=>{
    assert.deepEqual(tail([1,1,3]),[1,3])
  });
  it('should not modify original array',()=>{
    let originalArray = [1,2,3,4,5];
    tail(originalArray);
    assert.deepEqual(originalArray,[1,2,3,4,5]);
  });
});