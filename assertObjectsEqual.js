const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const obj1 in object1) {
    if (!object2[obj1]) {
      return false;
    } else if (object1[obj1] !== object2[obj1] && !(typeof object1[obj1] === 'object' && typeof object2[obj1] === 'object')) {
      return false;
    } else if (Object.getPrototypeOf(object1[obj1]) !== (Object.getPrototypeOf(object2[obj1]))) {
      return false;
    } else if (typeof object1[obj1] === 'object' && typeof object2[obj1] === 'object') {
      return eqObjects(object1[obj1],object2[obj1]);
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅   Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⚠️   Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: '2'},{})


