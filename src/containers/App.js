import { connect } from 'react-redux';

import App from '~/components/App';

const mapStateToProps = state => ({
  menuIsOpen: state.appReducer.menuIsOpen,
});

const AppContainer = connect(
  mapStateToProps,
  null,
)(App);

export default AppContainer;
