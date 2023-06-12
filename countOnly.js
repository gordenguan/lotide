const countOnly = (allItems, itemsToCount) => {
    
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;     //increase item count if already exist
      } else {
        results[item] = 1;      //set item: 1 in results
      }
    }
  }

  return results;
};

module.exports = countOnly;   //export function