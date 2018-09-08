import React from 'react';
import PropTypes from 'prop-types';

import Project from '~/containers/Pages/Realisations/Project';

const Realisations = ({ projects }) => (
  <div className="section">
    <h2>Mes réalisations :</h2>
    {
      projects.map(project => (
        <Project key={project.slug} project={project} />
      ))
    }
  </div>
);

Realisations.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Realisations;
