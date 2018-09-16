import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeMenu } from '~/store/actionsCreator/app';
import Menu from '~/components/Menu';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ closeMenu }, dispatch),
});

const MenuContainer = connect(
  null,
  mapDispatchToProps,
)(Menu);

export default MenuContainer;
