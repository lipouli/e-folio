import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTooltip, unsetTooltip } from '~/store/actionsCreator/app';
import Tip from '~/components/InfoMouse/Tip';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ unsetTooltip }, dispatch),
  setTooltip: (tooltip, place) => () => {
    dispatch(setTooltip(tooltip, place));
  },
});

const TipContainer = connect(
  null,
  mapDispatchToProps,
)(Tip);

export default TipContainer;
