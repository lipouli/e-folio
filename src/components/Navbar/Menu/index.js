import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

import Li from './Li';
import Ul from './Ul';
import Filter from './Filter';

const Menu = () => (
  <Ul>
    <Li onClick={() => console.log('menu clicked')}>
      <FontAwesomeIcon icon={faCompass} />
    </Li>
    <Filter />
  </Ul>
);

export default Menu;
