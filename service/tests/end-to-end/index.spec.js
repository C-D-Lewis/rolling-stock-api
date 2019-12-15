const { expect } = require('chai');
const { post, get, put, del } = require('./utils');

describe('test:e2e', () => {
  describe('Rolling Stock API', () => {
    const payload = {
      type: 'emu',
      class: '345',
      unitNumber: '345999',
      manufacturer: 'Bombardier',
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

      expect(res.statusCode).to.equal(200);
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

    it('should replace a RollingStockDocument by ID', async () => {
      const { body: created } = await post('/rollingStock', payload);

      const replacePayload = { ...created, unitNumber: '340124' };
      const res = await put(`/rollingStock/${created.id}`, replacePayload);

      expect(res.statusCode).to.equal(200);
      expect(res.body.id).to.equal(created.id);
      expect(res.body.createdAt).to.not.equal(res.body.updatedAt);
      expect(res.body.unitNumber).to.equal(replacePayload.unitNumber);

      await del(`/rollingStock/${created.id}`);
    });
  });
});
