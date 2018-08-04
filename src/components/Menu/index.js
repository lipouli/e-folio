import React from 'react';
import PropTypes from 'prop-types';

import MenuDiv from './MenuDiv';
import CenterDiv from './CenterDiv';
import ArcMenu from './ArcMenu';

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
