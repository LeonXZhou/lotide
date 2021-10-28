const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅   Assertion Passed: ${actual} (${typeof(actual)}) === ${expected} (${typeof(expected)})`);
  } else {
    console.log(`⚠️   Assertion Failed: ${actual} (${typeof(actual)}) !== ${expected} (${typeof(expected)})`);
  }
};

const findKey = (obj,callback) => {
  for (const o in obj) {
    if (callback(obj[o])) {
      return o;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");


const testObj = {a:"bob",
  b:"george",
  c: "r0b0t"};

assertEqual(findKey(testObj, x => x === "bob"),'a');