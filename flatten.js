const flatten = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);              //if item is not array, push to result.
    }
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);           //if item is array, loop thru it and push each item inside to result.
    }
  }
  return (result);
};

module.exports = flatten;     //export function