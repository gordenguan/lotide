const countLetters = (str) => {
  const result = {};
  for (const letter of str) {
    if (!result[letter] && letter !== ' ') {
      result[letter] = 1;     //set letter count to 1 in result obj
    } else if (result[letter]) {
      result[letter] += 1;     //increase letter count if already exist
    }
  }
  return result;
};

module.exports = countLetters;      //function export