import {
  OPEN_MENU,
  CLOSE_MENU,
  SET_TOOLTIP,
  CLOSE_PROJECT,
  OPEN_PROJECT,
  UNSET_TOOLTIP,
} from '~/store/actions/app';

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const setTooltip = (tooltip, place) => ({
  type: SET_TOOLTIP,
  tooltip,
  place,
});

export const unsetTooltip = () => ({
  type: UNSET_TOOLTIP,
});

export const closeProject = () => ({
  type: CLOSE_PROJECT,
});

export const openProject = project => ({
  type: OPEN_PROJECT,
  project,
});
