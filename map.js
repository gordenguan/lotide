const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); //loop thru array and push the return from callback function to empty array.
  }
  return results;
};

module.exports = map;  //export function