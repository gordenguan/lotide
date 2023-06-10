const countLetters = (str) => {
  const result = {};
  for (const letter of str) {
    if (!result[letter] && letter !== ' ') {
      result[letter] = 1;
    } else if (result[letter]) {
      result[letter] += 1;
    }
  }
  return result;
};

module.exports = countLetters;