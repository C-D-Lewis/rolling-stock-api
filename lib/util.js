/**
 * Create a standardized error response.
 *
 * @param {string} message - Error message.
 * @returns {object} The completed error response.
 */
exports.createError = (message) => ({ error: message });
