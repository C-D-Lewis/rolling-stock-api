import { ApiError } from '../api/types';

/**
 * Create a standardized error response.
 *
 * @param {string} message - Error message.
 * @returns {object} The completed error response.
 */
const createError = (message: string): ApiError => ({ error: message });

export default createError;
