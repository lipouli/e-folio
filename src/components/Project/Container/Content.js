import React from 'react';
import PropTypes from 'prop-types';

import ContentDiv from './ContentDiv';

const ContentProjectDiv = ({ children }) => (
  <ContentDiv>
    {children}
  </ContentDiv>
);

ContentProjectDiv.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ContentProjectDiv;
