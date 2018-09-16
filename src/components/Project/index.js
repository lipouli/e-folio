import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Div from './Div';
import NoProject from './NoProject';

const Project = ({ projectData }) => {
  const { Component } = projectData;
  return (
    <Container isProjectOpen={projectData && true} >
      <Div>
        { !projectData ? <NoProject /> : <Component />}
      </Div>
    </Container>
  );
};

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
