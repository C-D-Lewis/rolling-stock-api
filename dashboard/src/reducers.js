import { combineReducers } from 'redux';

/**
 * Build a reducer from a map of action types to handlers.
 *
 * @param {*} firstValue - First value of the reducer.
 * @param {Object} subreducers - Map of subreducers.
 * @returns {Function} Function called with initial state and action to process.
 */
const buildReducer = (firstValue, subreducers) => (state = firstValue, action) =>
    subreducers[action.type]
      ? subreducers[action.type](state, action)
      : state;

export const rootReducer = combineReducers({
  ip: buildReducer('localhost', {
    SET_IP: (state, { ip }) => ip,
  }),
  currentPage: buildReducer('', {
    SET_CURRENT_PAGE: (state, { currentPage }) => currentPage,
  }),
  currentResource: buildReducer({}, {
    SET_CURRENT_RESOURCE: (state, { currentResource }) => currentResource,
  }),
});
