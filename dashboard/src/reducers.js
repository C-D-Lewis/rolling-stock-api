import { combineReducers } from 'redux';

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
});
