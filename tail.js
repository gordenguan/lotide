//loop thru array, push everything except first item to an empty array.

let tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

module.exports = tail; //export function
