import { createStore } from 'redux';
import { rootReducer } from './reducers';
import BlankPage from './pages/BlankPage.jsx';

const INITIAL_STATE = {
  ip: '',
  currentPage: BlankPage,
};

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
