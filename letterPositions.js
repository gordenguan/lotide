const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]] = [i];           //create key-value pair in obj.
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);         //push to the value array if key already exist.
    }
  }
  return results;
};

module.exports = letterPositions;   //export function