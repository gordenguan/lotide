const findKeyByValue = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;           //loop thru obj, find key by using its value.
    }
  }
};

module.exports = findKeyByValue;      //export function