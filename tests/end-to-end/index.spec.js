const { expect } = require('chai');
const { post, get, put, del } = require('./utils');

describe('test:e2e', () => {
  describe('Rolling Stock API', () => {
    it('should create a RollingStockDocument', async () => {
      const payload = { type: 'electric', class: '340' };
      const res = await post('/rollingStock', payload);

      const { body, statusCode } = res;
      expect(statusCode).to.equal(201);
      expect(body.id).to.be.a('string');
      expect(body.type).to.equal(payload.type);
    });

    it('should read a RollingStockDocument by ID', async () => {
      const payload = { type: 'electric', class: '340' };
      let createRes = await post('/rollingStock', payload)

      res = await get(`/rollingStock/${createRes.body.id}`);

      expect(res.body.id).to.equal(createRes.body.id);
      expect(res.body.type).to.equal(payload.type);
    });
  });
});
