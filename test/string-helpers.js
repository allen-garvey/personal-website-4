const assert = require('assert');
const stringHelpers = require('../src/helpers/string-helpers');

describe('String Helpers', () => {
  describe('#smartenQuotes()', () => {
    it('Should replace single quotes with smart single quotes', () => {
      assert.equal(stringHelpers.smartenQuotes(`Hi I'm Allen`), 'Hi I’m Allen');
      assert.equal(stringHelpers.smartenQuotes(`Is that 'right'?`), 'Is that ‘right’?');
    });

    it('Should replace double quotes with smart double quotes', () => {
      assert.equal(stringHelpers.smartenQuotes(`He said, "That's great!"`), 'He said, “That’s great!”');
    });
  });
});