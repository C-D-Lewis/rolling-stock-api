/**
 * ip reducer.
 *
 * @param {string} ip - IP to use.
 * @returns {Object} Action object.
 */
export const setIp = ip => ({
  type: 'SET_IP',
  ip,
});

/**
 * currentPage reducer.
 *
 * @param {string} currentPage - Current page to use.
 * @returns {Object} Action object.
 */
export const setCurrentPage = currentPage => ({
  type: 'SET_CURRENT_PAGE',
  currentPage,
});
