import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

import Li from './Li';
import Ul from './Ul';
import Filter from './Filter';

const Menu = ({ openMenu }) => (
  <Ul>
    <Li onClick={openMenu}>
      <FontAwesomeIcon icon={faCompass} />
    </Li>
    <Filter />
  </Ul>
);

Menu.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Menu;
