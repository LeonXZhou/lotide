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
    } else if (typeof object1[obj1] === 'object' && typeof object2[obj1] === 'object') { // we need to check both are objects because at this stage it can be two primitives that are equal
      if (!(eqObjects(object1[obj1],object2[obj1]))) {
        return false;
      }
    }
  }
  return true;
};


module.exports = eqObjects


// console.log('prototype comparison',Object.getPrototypeOf([1,2,3,4]) === Object.getPrototypeOf(ab)) //false
// console.log('undefined string comparison', ab['asdf'] === 'sd') //false
// console.log(ab === ba) //false


// let a = [2,3,4];
// for (key in a)
// {
//   console.log(key);
// }

// let ab = { a: [], b: "2" };
// let ba = { b: "2", a: {}};
// console.log('false miss match object prototype', eqObjects(ab, ba));
// console.log('----------');

// ab = { a: [], b: "2" };
// ba = { b: "2", a: Number(3)};
// console.log('false miss match object prototype', eqObjects(ab, ba));
// console.log('----------');

// ab = { a: "1", b: "2" };
// ba = { b: "2", a: '2' };
// console.log('false missmatching values at key a', eqObjects(ab, ba));
// console.log('----------');

// ab = { a: "1", b: "2" };
// ba = { b: "2", c: '1' };
// console.log('false missmatching key names', eqObjects(ab, ba));
// console.log('----------');

// const abc = { a: "1", b: "2", c: "3" };
// console.log('false size', eqObjects(ab, abc)); // => false
// console.log('----------');

// ab = { a: "1", b: "2" };
// ba = { b: "2", a: '2' };
// console.log('false values for key a do not match', eqObjects(ab, ba));
// console.log('----------');

// ab = Number(3);
// ba = Number(3);
// console.log('true equal wrapper object', eqObjects(ab, ba));
// console.log('----------');

// ab = Number(3);
// ba = String(3);
// console.log('false missmatched wrapper object type', eqObjects(ab, ba));
// console.log('----------');

// let cd = { c: "1", d: ["2", 3] };
// let dc = { d: ["2", 3], c: "1" };
// console.log('true equal array', eqObjects(cd, dc));
// console.log('----------');

// let cd2 = { c: "1", d: ["2", 3, 4] };
// console.log('false different array' ,eqObjects(cd, cd2));
// console.log('----------');

// cd = { c: "1", d: ["2", 3 ,[3,4]] ,e: 'asdf'};
// dc = { d: ["2", 3, [3,4]], c: "1" ,e: 'asdf'};
// console.log('true nested equal array', eqObjects(cd, dc));
// console.log('----------');

// cd = { c: "1", d: ["2", 3 ,[3,4]] ,e: { d: ["2", 3, [2,4]], c: "1" ,e: 'asdf'}};
// dc = { d: ["2", 3, [3,4]], c: "1" ,e: { d: ["2", 3, [3,4]], c: "1" ,e: 'asdf'}};
// console.log('false missmatching value in array', eqObjects(cd, dc));
// console.log('----------');
