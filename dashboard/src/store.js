import { createStore } from 'redux';
import { rootReducer } from './reducers';
import BlankPage from './pages/BlankPage.jsx';

/** Initial store for the entire reducer. */
const INITIAL_STATE = {
  ip: 'localhost',
  currentPage: BlankPage,
};

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
