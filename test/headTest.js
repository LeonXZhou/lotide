const assert = require('chai').assert;
const head = require('../head')

describe('#Head takes in array and returns first element',()=>{
  it('should return 5 for [5,6,7]',() => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it('should return "Hello" for ["Hello", "Lighthouse", "Labs"]',() => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('should return undefined for []',() => {
    assert.strictEqual(head([]), undefined);
  });
  it('should return "hello" for ["hello"]',() => {
    assert.strictEqual(head(['hello']), 'hello');
  });
});