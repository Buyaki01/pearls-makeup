import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import makeupReducer from './makeupReducer';

const reducers = combineReducers({
  makeupReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
