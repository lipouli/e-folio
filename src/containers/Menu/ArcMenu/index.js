import { connect } from 'react-redux';

import ArcMenu from '~/components/Menu/ArcMenu';
import menuList from '~/data/menu';

const mapStateToProps = state => ({
  menuList: menuList.filter(menuItem => `/${menuItem.path}` !== state.router.location.pathname),
});

const ArcMenuContainer = connect(
  mapStateToProps,
  null,
)(ArcMenu);

export default ArcMenuContainer;
