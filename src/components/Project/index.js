import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Div from './Div';
import NoProject from './NoProject';

const Project = ({ projectData }) => (
  <Container>
    <Div>
      { !projectData ? <NoProject /> : <div>Project here !</div>}
    </Div>
  </Container>
);

Project.propTypes = {
  projectData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

Project.defaultProps = {
  projectData: false,
};

export default Project;
