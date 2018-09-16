import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CloseIcon from '~/components/Project/Container/CloseIcon';
import { closeProject } from '~/store/actionsCreator/app';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ closeProject }, dispatch),
});

const CloseIconContainer = connect(
  null,
  mapDispatchToProps,
)(CloseIcon);

export default CloseIconContainer;
