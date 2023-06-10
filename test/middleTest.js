const assert = require('chai').assert;
const _ = require('../index');

describe('#middle', () => {
  it('return [2] for [1, 2, 3]', () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it('return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});