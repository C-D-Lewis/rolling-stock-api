const chai = require('chai');
const chaiHttp = require('chai-http');

const config = require('../../dist/config/config').default;

chai.use(chaiHttp);

const { SERVER = `http://localhost:${config.server.port}` } = process.env;

/**
 * POST request.
 *
 * @param {string} path - URL path.
 * @param {Object} data - Data to send.
 * @returns {Object} Response object.
 */
exports.post = (path, data) => chai.request(SERVER)
  .post(path)
  .set('Content-Type', 'application/json')
  .send(data);

/**
 * GET request.
 *
 * @param {string} path - URL path.
 * @returns {Object} Response object.
 */
exports.get = (path) => chai.request(SERVER)
  .get(path);

/**
 * PUT request.
 *
 * @param {string} path - URL path.
 * @param {Object} data - Data to send.
 * @returns {Object} Response object.
 */
exports.put = (path, data) => chai.request(SERVER)
  .put(path)
  .set('Content-Type', 'application/json')
  .send(data);

/**
 * DELETE request.
 *
 * @param {string} path - URL path.
 * @returns {Object} Response object.
 */
exports.del = async (path) => chai.request(SERVER).delete(path);
