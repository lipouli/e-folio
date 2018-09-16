import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from '~/containers/App';
import store, { history } from '~/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});

