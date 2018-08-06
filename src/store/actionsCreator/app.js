import {
  OPEN_MENU,
  CLOSE_MENU,
  SET_TOOLTIP,
  UNSET_TOOLTIP,
} from '~/store/actions/app';

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const setTooltip = payload => ({
  type: SET_TOOLTIP,
  payload,
});

export const unsetTooltip = () => ({
  type: UNSET_TOOLTIP,
});
