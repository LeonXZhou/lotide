const arrayAssertEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`⚠️     Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2 [i]) {
      console.log(`⚠️      Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`✅   Assertion Passed: ${arr1} === ${arr2}`);
  return true;
};

const tail = function(arr) {
  return arr.slice(1,arr.length);
}

console.log(tail([1]));
console.log(tail([]));
arrayAssertEqual(tail([1,1,3]),[1,3]);
arrayAssertEqual(tail([1]),[]);

//testing unmodified original array
let originalArray = [1,2,3,4,5];
tail(originalArray);
arrayAssertEqual(originalArray,[1,2,3,4,5]);