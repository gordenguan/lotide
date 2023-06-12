const middle = (arr) => {
  let length = arr.length;
  let middleIndex = Math.floor(length / 2); //locate the middle index of the array.

  if (arr.length < 3) {
    return [];
  } else if (length % 2 === 1) {
    return [arr[middleIndex]];  //if array has odd number of items, return item of middle index.
  } else if (length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];  //if array has even number of items, return item of middle index -1 and middle index.
  }
};

module.exports = middle; //export function