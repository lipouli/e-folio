import {
  OPEN_MENU,
  CLOSE_MENU,
} from '~/store/actions/app';

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});
