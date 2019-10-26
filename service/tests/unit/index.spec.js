const { expect } = require('chai');
const validate = require('../../lib/utils/validate');
const util = require('../../lib/util');

describe('test:unit', () => {
  describe('util.js', () => {
    it('should perform schema validation', () => {
      const schema = {
        additionalProperties: false,
        properties: {
          foo: { type: 'number' },
        },
      };
      const data = { foo: 42 };

      expect(validate(schema, data)).to.equal(true);
    });
  });

  describe('util.js', () => {
    it('should create an error response object', () => {
      const obj = util.createError('Some error reason');

      expect(obj.error).to.equal('Some error reason');
    });
  });
});
