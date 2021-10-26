const eqArrays = function (arr1, arr2) {
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

const assertArrayEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅   Assertion Passed: ${actual} (${typeof (actual)}) === ${expected} (${typeof (expected)})`);
  } else {
    console.log(`⚠️   Assertion Failed: ${actual} (${typeof (actual)}) !== ${expected} (${typeof (expected)})`);
  }
};


const without = function (original, removalTargets) {
  const removalMap = new Map()
  output = []
  for (r of removalTargets) {
    removalMap.set(r, true);
  }
  for (o of original)
  {
    if (!removalMap.get(o))
    {
      output.push(o);
    }
  }
  return output;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);

assertArrayEqual(without([1, 2, 3], [1]),[2,3])
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"])
assertArrayEqual(without(["a", 2 , true, false ], [true]),["a", 2 , false ])
assertArrayEqual(without([1,2,3,4,5,6,7,8,9,10,22,3,4,5,2,3,4,5,3,4,2,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,2,5], [100,203,2,33,44,4,45,6,7,5,3,19]),[1,8,9,10,22])