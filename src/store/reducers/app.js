import projects from '~/data/projects';

import {
  OPEN_MENU,
  CLOSE_MENU,
  SET_TOOLTIP,
  UNSET_TOOLTIP,
} from '~/store/actions/app';
/**
 * État initial pour le state de l'application
 */
const initialState = {
  projects,
  menuIsOpen: false,
  tooltip: '',
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
    case SET_TOOLTIP: {
      return {
        ...currentState,
        tooltip: action.payload,
      };
    }
    case UNSET_TOOLTIP: {
      return {
        ...currentState,
        tooltip: '',
      };
    }
    default: return currentState;
  }
};

export default appReducer;
