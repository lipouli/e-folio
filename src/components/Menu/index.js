import React from 'react';
import PropTypes from 'prop-types';

import MenuDiv from './MenuDiv';
import CenterDiv from './CenterDiv';

const Menu = ({ closeMenu }) => (
  <MenuDiv onClick={closeMenu}>
    <CenterDiv>
      Menu opened !!
    </CenterDiv>
  </MenuDiv>
);

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
