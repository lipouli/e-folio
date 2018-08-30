import createHistory from 'history/createBrowserHistory'
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';

export const history = createHistory();
export const historyMiddleware = routerMiddleware(history);
export const router = routerReducer;

