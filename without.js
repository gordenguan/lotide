const without = (arr1, arr2) => {
  return arr1.filter((item) => !arr2.includes(item)); //filter out items that arr2 do not has.
};
  
module.exports = without; //export function
