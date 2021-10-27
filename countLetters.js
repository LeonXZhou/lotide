let countLetters = function(string)
{
  const results = {};
  for (s of string) {
    if (results[s] && s !== ' ')
    {
      results[s]++;
    }
    else if (s !== ' ')
    {
      results[s] = 1;
    }

  }
  return results
}
console.log(countLetters("lighthouse in the house"))