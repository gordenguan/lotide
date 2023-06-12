//compare arrays
const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return (true);
  } else {
    return (false);
  }
};

//compare obj with their keys' length and values
const eqObjects = (object1, object2) => {
  for (let key in object1) {
    if (Object.keys(object1).length === Object.keys(object2).length && eqArrays((object1[key]), (object2[key]))) {
      return true;
    } else {
      return false;
    }
  }
};

//compare obj with above function and log out the result
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
