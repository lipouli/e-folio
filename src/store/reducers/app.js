import projects from '~/data/projects';

import {
  OPEN_MENU,
  CLOSE_MENU,
} from '~/store/actions/app';
/**
 * État initial pour le state de l'application
 */
const initialState = {
  projects,
  menuIsOpen: false,
};

/**
 * Reducer de l'application
 */
const appReducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MENU: {
      return {
        ...currentState,
        menuIsOpen: true,
      };
    }
    case CLOSE_MENU: {
      return {
        ...currentState,
        menuIsOpen: false,
      };
    }
    default: return currentState;
  }
};

export default appReducer;
