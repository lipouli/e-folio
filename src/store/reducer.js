import projects from '~/data/projects';
/**
 * État initial pour le state de l'application
 */
const initialState = {
  projects,
};

/**
 * Reducer de l'application
 */
const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    default: return currentState;
  }
};

export default reducer;
