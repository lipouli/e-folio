import React from 'react';
import PropTypes from 'prop-types';

import Date from '~/utils/Date';
import Section from './Section';
import dateCss from './date';
import Span from './SpanDescription';

const Project = ({ project }) => {
  const { description: Description } = project;
  return (
    <Section>
      <h1>
        {project.name} <Span>{project.info.description}</Span>
      </h1>
      {Description && <Description />}
      <Date date={project.date} className={dateCss} />
    </Section>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
