import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';
import { historyMiddleware } from './reducers/router';

const devTools = [];

if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const middlewares = [historyMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = compose(middlewareEnhancer, ...devTools);

const store = createStore(reducers, enhancers);

export default store;
