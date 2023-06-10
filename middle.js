const middle = (arr) => {
  let length = arr.length;
  let middleIndex = Math.floor(length / 2);

  if (arr.length < 3) {
    return [];
  } else if (length % 2 === 1) {
    return [arr[middleIndex]];
  } else if (length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
};

module.exports = middle;