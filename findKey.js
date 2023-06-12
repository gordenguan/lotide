const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;       //find key with the callback function
    }
  }
};

module.exports = findKey;   //function export