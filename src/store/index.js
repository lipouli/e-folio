import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducer';

const devTools = [];

if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const middlewares = [];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = compose(middlewareEnhancer, ...devTools);

const store = createStore(reducer, enhancers);

export default store;
