import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const InfoMouse = ({ data, place }) => (
  <ReactTooltip id="global" aria-haspopup="true" type="info" place={place} effect="solid">
    {data}
  </ReactTooltip>
);

InfoMouse.propTypes = {
  data: PropTypes.any,
  place: PropTypes.string.isRequired,
};

InfoMouse.defaultProps = {
  data: null,
};

export default InfoMouse;
