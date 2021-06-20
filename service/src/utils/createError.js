/**
 * Create a standardized error response.
 *
 * @param {string} message - Error message.
 * @returns {object} The completed error response.
 */
const createError = (message) => ({ error: message });

module.exports = createError;
