import { closeMenu } from '~/store/actionsCreator/app';

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
    default: {
      next(action);
    }
  }
};

export default appMiddleware;
