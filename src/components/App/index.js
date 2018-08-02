import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '~/components/Navbar';
import Menu from '~/containers/Menu';

const App = ({ menuIsOpen }) => (
  <React.Fragment>
    <Navbar />
    { menuIsOpen && <Menu />}
  </React.Fragment>
);

App.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default App;
