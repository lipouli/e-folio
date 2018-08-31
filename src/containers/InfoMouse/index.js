import { connect } from 'react-redux';

import { getData } from '~/data/InfoMouse';
import InfoMouse from '~/components/InfoMouse';

const mapStateToProps = state => ({
  data: getData(state.appReducer.tooltip),
  place: state.appReducer.place,
});

const InfoMouseContainer = connect(
  mapStateToProps,
)(InfoMouse);

export default InfoMouseContainer;
