import { connect } from 'react-redux';

import Realisations from '~/components/Pages/Realisations';
import RealisationsData from '~/data/projects';

const mapStateToProps = () => ({
  projects: [...RealisationsData].sort((a, b) => a.date - b.date),
});

const RealisationsContainer = connect(
  mapStateToProps,
  null,
)(Realisations);

export default RealisationsContainer;
