const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  const result = {};
  for (const letter of str) {
    if (!result[letter] && letter !== ' ') {
      result[letter] = 1;
    } else if (result[letter]) {
      result[letter] += 1;
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));

assertEqual(JSON.stringify(countLetters('lighthouse in the house')),
  JSON.stringify({
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  }));