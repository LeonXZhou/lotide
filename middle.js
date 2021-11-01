const middle = function(array) {
  const output = [];
  if (array.length <= 2) {
    return output;
  }
  for (let i = Math.floor((array.length/2.0)-.5); i <= Math.floor((array.length/2.0)); i++)
  {
    output.push(array[i]);
  }
  return output;
};

module.exports = middle;
