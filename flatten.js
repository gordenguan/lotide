const assertArraysEqual = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return (true);
  } else {
    return (false);
  }
};

const flatten = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    }
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return (result);
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);