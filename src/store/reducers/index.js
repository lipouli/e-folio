import { combineReducers } from 'redux';

import appReducer from './app';
import { router } from './router';

const reducers = combineReducers({
  appReducer,
  router,
});

export default reducers;
