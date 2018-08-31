import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from './reducers';
import appMiddleware from './middlewares/app';

const devTools = [];

if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

export const history = createBrowserHistory();

const historyMiddleware = routerMiddleware(history);

const middlewareEnhancer = applyMiddleware(historyMiddleware, appMiddleware);

const enhancers = compose(middlewareEnhancer, ...devTools);

const store = createStore(connectRouter(history)(reducers), enhancers);

export default store;
