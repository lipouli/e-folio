import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import Navbar from '~/components/Navbar';
import Menu from '~/containers/Menu';

const App = ({ menuIsOpen }) => (
  <React.Fragment>
    <Navbar />
    {/* { menuIsOpen && <Menu />} */}
    <Transition
      timeout={1500}
      in={menuIsOpen}
      unmountOnExit
    >
      <Menu />
    </Transition>
  </React.Fragment>
);

App.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default App;
