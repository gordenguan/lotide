const takeUntil = function(array, callback) {
  let answer = [];
  for (let item of array) {
    if (!callback(item)) {
      answer.push(item);
    } else {
      break;
    }
  }
  return answer;
};

module.exports = takeUntil;