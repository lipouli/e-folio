import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const devTools = [];

if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const middlewares = [];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = compose(middlewareEnhancer, ...devTools);

const store = createStore(reducers, enhancers);

export default store;
