import React from 'react';

import Menu from '~/containers/Navbar/Menu';
import Tip from '~/containers/InfoMouse/Tip';
import Nav from './Nav';
import H1 from './H1';

const Navbar = () => (
  <Nav>
    <Tip component={H1} tooltip="app">Lipou Li</Tip>
    <Menu />
  </Nav>
);

export default Navbar;
