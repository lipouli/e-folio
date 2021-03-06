import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

import Tip from '~/containers/InfoMouse/Tip';
import Li from './Li';
import Ul from './Ul';
import Filter from './Filter';

const Menu = ({ openMenu }) => (
  <Tip component={Ul} tooltip="header">
    <Li onClick={openMenu}>
      <FontAwesomeIcon icon={faCompass} />
    </Li>
    <Filter />
  </Tip>
);

Menu.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Menu;
