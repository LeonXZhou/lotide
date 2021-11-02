
// function translateToPigLatin(word) {
//   return word.slice(1, word.length) + word[0] + "ay";
// }

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];

// assertArrayEqual(map(words, word => word[0]),['g','c','t','m','t']);
// assertArrayEqual(map(words, word => {return word.length}),[6,7,2,5,3])
// assertArrayEqual(map(words, word => {return translateToPigLatin(word)}),['roundgay','ontrolcay','otay','ajormay','omtay'])