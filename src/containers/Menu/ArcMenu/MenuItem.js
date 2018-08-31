import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import MenuItem from '~/components/Menu/ArcMenu/MenuItem';

const mapStateToProps = state => ({
  menuIsOpen: state.appReducer.menuIsOpen,
});

const mapDispatchToProps = dispatch => ({
  changePage: (path) => {
    dispatch(push(`/${path}`));
  },
});

const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuItem);

export default MenuItemContainer;
