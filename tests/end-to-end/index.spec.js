const { expect } = require('chai');
const request = require('request');
const nock = require('nock');

/**
 * Mock the API.
 */
const mockApi = () => nock('http://localhost');

const requestApi = (method, path, data) => new Promise((resolve, reject) => {
  request({
    url: `http://localhost${path}`,
    method,
    body: data ? JSON.stringify(data) : undefined,
  }, (err, response, body) => {
    if (err) {
      reject(err);
      return;
    }

    resolve({ response, data: JSON.stringify(body) });
  });
});

describe('line-manager End to End Tests', () => {
  describe('Rolling Stock', async () => {
    const payload = { type: 'electric', class: '340' };
    mockApi().post('/rollingStock', payload).reply(201, payload);

    const { response, data } = await requestApi('post', '/rollingStock', payload);

    expect(data.type).to.equal(payload.type);
  });
});
