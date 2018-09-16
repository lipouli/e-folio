import { connect } from 'react-redux';

import Project from '~/components/Pages/Realisations/Project';
import { openProject } from '~/store/actionsCreator/app';

const mapDispatchToProps = dispatch => ({
  openProject: project => () => {
    dispatch(openProject(project));
  },
});

const ProjectContainer = connect(
  null,
  mapDispatchToProps,
)(Project);

export default ProjectContainer;
