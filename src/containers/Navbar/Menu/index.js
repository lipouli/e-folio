import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openMenu } from '~/store/actionsCreator/app';
import Menu from '~/components/Navbar/Menu';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ openMenu }, dispatch),
});

const MenuContainer = connect(
  null,
  mapDispatchToProps,
)(Menu);

export default MenuContainer;
