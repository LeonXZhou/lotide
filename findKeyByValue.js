const findKeyByValue = function(object, targetValue) {
  for (const o in object) {
    if (object[o] === targetValue) {
      return o;
    }
  }
};

module.exports = findKeyByValue;