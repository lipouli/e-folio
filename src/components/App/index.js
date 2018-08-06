import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import Navbar from '~/components/Navbar';
import Menu from '~/containers/Menu';
import InfoMouse from '~/containers/InfoMouse';

const App = ({ menuIsOpen }) => (
  <React.Fragment>
    <Navbar />
    <Transition
      timeout={1500}
      in={menuIsOpen}
      unmountOnExit
    >
      <Menu />
    </Transition>
    <InfoMouse />
  </React.Fragment>
);

App.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default App;
