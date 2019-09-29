const { expect } = require('chai');
const validate = require('../../lib/utils/validate');

describe('line-manager', () => {
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
  });
});
