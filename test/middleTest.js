//require chai.assert for testing and function from index.js
const assert = require('chai').assert;
const _ = require('../index');


//use describe and it to test middle function
describe('#middle', () => {
  it('return [2] for [1, 2, 3]', () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it('return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});