const { expect } = require('chai');
const { post, get, put, del } = require('./utils');

describe('test:e2e', () => {
  describe('Railway Stock API', () => {
    const payload = {
      type: 'emu',
      class: '345',
      unitNumber: '345999',
      manufacturer: 'Bombardier',
    };
    let railwayStock;

    it('should create a RailwayStockDocument', async () => {
      const res = await post('/railwayStock', payload);

      expect(res.statusCode).to.equal(201);
      expect(res.body.id).to.be.a('string');
      expect(res.body.type).to.equal(payload.type);

      railwayStock = res.body;
    });

    it('should delete a RailwayStockDocument', async () => {
      const res = await del(`/railwayStock/${railwayStock.id}`);

      expect(res.statusCode).to.equal(200);
    });

    it('should list all RailwayStockDocuments', async () => {
      const { body: created } = await post('/railwayStock', payload);

      const res = await get('/railwayStock');

      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.length.gte(1);

      await del(`/railwayStock/${created.id}`);
    });

    it('should read a RailwayStockDocument by ID', async () => {
      const { body: created } = await post('/railwayStock', payload);

      const res = await get(`/railwayStock/${created.id}`);

      expect(res.statusCode).to.equal(200);
      expect(res.body.id).to.equal(created.id);
      expect(res.body.type).to.equal(payload.type);

      await del(`/railwayStock/${created.id}`);
    });

    it('should replace a RailwayStockDocument by ID', async () => {
      const { body: created } = await post('/railwayStock', payload);

      const replacePayload = { ...created, unitNumber: '340124' };
      const res = await put(`/railwayStock/${created.id}`, replacePayload);

      expect(res.statusCode).to.equal(200);
      expect(res.body.id).to.equal(created.id);
      expect(res.body.createdAt).to.not.equal(res.body.updatedAt);
      expect(res.body.unitNumber).to.equal(replacePayload.unitNumber);

      await del(`/railwayStock/${created.id}`);
    });
  });
});
