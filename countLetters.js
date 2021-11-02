// FUNCTION IMPLEMENTATION
let countLetters = function(string) {
  const results = {};
  for (const s of string) {
    if (results[s] && s !== ' ') {
      results[s]++;
    } else if (s !== ' ') {
      results[s] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

// assertEqual(countLetters("lighthouse in the house")['l'],1);
// assertEqual(countLetters("lighthouse in the house")['i'],2);
// assertEqual(countLetters("lighthouse in the house")['g'],1);
// assertEqual(countLetters("lighthouse in the house")['h'],4);
// assertEqual(countLetters("lighthouse in the house")['t'],2);
// assertEqual(countLetters("lighthouse in the house")['o'],2);
// assertEqual(countLetters("lighthouse in the house")['u'],2);
// assertEqual(countLetters("lighthouse in the house")['s'],2); 
// assertEqual(countLetters("lighthouse in the house")['e'],3);  
// assertEqual(countLetters("lighthouse in the house")['n'],1); 
// console.log(countLetters("lighthouse in the house"));
