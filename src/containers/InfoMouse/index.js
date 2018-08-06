import { connect } from 'react-redux';

import { getData } from '~/data/InfoMouse';
import InfoMouse from '~/components/InfoMouse';

const mapStateToProps = state => ({
  data: getData(state.appReducer.tooltip),
});

const InfoMouseContainer = connect(
  mapStateToProps,
  null,
)(InfoMouse);

export default InfoMouseContainer;
