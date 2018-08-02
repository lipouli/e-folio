import React from 'react';

import Menu from '~/containers/Navbar/Menu';
import Nav from './Nav';
import H1 from './H1';

const Navbar = () => (
  <Nav>
    <H1>Lipou Li</H1>
    <Menu />
  </Nav>
);

export default Navbar;
