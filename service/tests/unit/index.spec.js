const { expect } = require('chai');
const createError = require('../../lib/utils/createError');
const validate = require('../../lib/utils/validate');

describe('test:unit', () => {
  describe('utils', () => {
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

    it('should create an error response object', () => {
      const obj = createError('Some error reason');

      expect(obj.error).to.equal('Some error reason');
    });
  });
});
