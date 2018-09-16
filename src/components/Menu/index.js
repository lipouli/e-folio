import React from 'react';
import PropTypes from 'prop-types';

import ArcMenu from '~/containers/Menu/ArcMenu';
import MenuDiv from './MenuDiv';
import CenterDiv from './CenterDiv';

const Menu = ({ closeMenu }) => (
  <MenuDiv onClick={closeMenu}>
    <CenterDiv>
      <ArcMenu />
    </CenterDiv>
  </MenuDiv>
);

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
