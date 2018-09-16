import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import A from './A';

const LinkExt = ({ href, children }) => (
  <A href={href} target="_blanck" rel="noopener noreferrer">
    {children} <span className="link-icon"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></span>
  </A>
);

LinkExt.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default LinkExt;
