import { connect } from 'react-redux';

import MenuItem from '~/components/Menu/ArcMenu/MenuItem';

const mapStateToProps = state => ({
  menuIsOpen: state.appReducer.menuIsOpen,
});

const MenuItemContainer = connect(
  mapStateToProps,
  null,
)(MenuItem);

export default MenuItemContainer;
