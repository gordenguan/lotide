const _ = require('./index');

const eqObjects = (object1, object2) => {
  for (let key in object1) {
    if (Object.keys(object1).length === Object.keys(object2).length && _.eqArrays((object1[key]), (object2[key]))) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = eqObjects;