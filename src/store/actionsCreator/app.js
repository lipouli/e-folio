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

export const setTooltip = (tooltip, place) => ({
  type: SET_TOOLTIP,
  tooltip,
  place,
});

export const unsetTooltip = () => ({
  type: UNSET_TOOLTIP,
});
