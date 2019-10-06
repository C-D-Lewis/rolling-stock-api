const { expect } = require('chai');
const { post, get, put, del } = require('./utils');

describe('test:e2e', () => {
  describe('Rolling Stock API', () => {
    const payload = {
      type: 'electric',
      class: '340',
      unitNumber: '340123',
    };
    let rollingStock;

    it('should create a RollingStockDocument', async () => {
      const res = await post('/rollingStock', payload);

      expect(res.statusCode).to.equal(201);
      expect(res.body.id).to.be.a('string');
      expect(res.body.type).to.equal(payload.type);

      rollingStock = res.body;
    });

    it('should delete a RollingStockDocument', async () => {
      const res = await del(`/rollingStock/${rollingStock.id}`);

      expect(res.statusCode).to.equal(200);
    });

    it('should list all RollingStockDocuments', async () => {
      const { body: created } = await post('/rollingStock', payload);

      const res = await get('/rollingStock');

      expect(res.body).to.have.length.gte(1);

      await del(`/rollingStock/${created.id}`);
    });

    it('should read a RollingStockDocument by ID', async () => {
      const { body: created } = await post('/rollingStock', payload);

      const res = await get(`/rollingStock/${created.id}`);

      expect(res.statusCode).to.equal(200);
      expect(res.body.id).to.equal(created.id);
      expect(res.body.type).to.equal(payload.type);

      await del(`/rollingStock/${created.id}`);
    });
  });
});
