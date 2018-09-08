import { closeMenu } from '~/store/actionsCreator/app';
import { push } from 'connected-react-router';
import queryString from 'query-string';

import { CLOSE_PROJECT, OPEN_PROJECT } from '~/store/actions/app';

const appMiddleware = store => next => (action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      const { menuIsOpen } = store.getState().appReducer;
      if (menuIsOpen) {
        store.dispatch(closeMenu());
      }
      next(action);
      break;
    }
    case OPEN_PROJECT: {
      const { router: { location: { pathname, search } } } = store.getState();
      const parse = queryString.parse(search);
      const newQuery = { ...parse, projects: action.project };
      const stringyfiedNewQuery = queryString.stringify(newQuery);
      store.dispatch(push(`${pathname}?${stringyfiedNewQuery}`));
      break;
    }
    case CLOSE_PROJECT: {
      const { router: { location } } = store.getState();
      const parse = queryString.parse(location.search);
      const filterredArrayParse = Object.keys(parse).filter(query => query !== 'projects');
      const newQueryString = filterredArrayParse.reduce((queries, query) => ({
        ...queries,
        [query]: parse[query],
      }), {});
      const stringyfiedQueryString = queryString.stringify(newQueryString);
      const newUrl = `${location.pathname}?${stringyfiedQueryString}`;
      store.dispatch(push(newUrl));
      break;
    }
    default: {
      next(action);
    }
  }
};

export default appMiddleware;
