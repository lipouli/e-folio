import { connect } from 'react-redux';

import Project from '~/components/Project';
import projectsData from '~/data/projects';

const mapStateToProps = (state, ownProps) => ({
  projectData: projectsData.find(project => project.slug === ownProps.project),
});

const ProjectContainer = connect(
  mapStateToProps,
  null,
)(Project);

export default ProjectContainer;
