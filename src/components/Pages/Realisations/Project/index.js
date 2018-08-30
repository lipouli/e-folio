import React from 'react';
import PropTypes from 'prop-types';

import Date from '~/utils/Date';
import Section from './Section';
import dateCss from './date';

const Project = ({ project }) => (
  <Section>
    <h1>
      {project.name}
    </h1>
    <Date date={project.date} className={dateCss} />
  </Section>
);

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
