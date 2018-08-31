import { createBrowserHistory } from 'history';
import {
  routerMiddleware,
} from 'connected-react-router';

export const history = createBrowserHistory();
export const historyMiddleware = routerMiddleware(history);

