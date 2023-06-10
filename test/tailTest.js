const assert = require('chai').assert;
const _ = require('../index');

const result = _.tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
  it('return 2 for array length', () => {
    assert.deepEqual(result.length, 2);
  });
  it('return "lighthouse" for first index', () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it('return "Labs" for second index', () => {
    assert.deepEqual(result[1], "Labs");
  });
});