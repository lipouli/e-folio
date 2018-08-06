import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const InfoMouse = ({ data }) => (
  <ReactTooltip id="global" aria-haspopup="true" type="info">
    {data}
  </ReactTooltip>
);

InfoMouse.propTypes = {
  data: PropTypes.any,
};

InfoMouse.defaultProps = {
  data: null,
};

export default InfoMouse;
