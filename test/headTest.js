//require chai.assert for testing and function from index.js
const assert = require('chai').assert;
const _ = require('../index');

//use describe and it to test head function
describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(_.head(['5']), '5');
  });
  it('return "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});