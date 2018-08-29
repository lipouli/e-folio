import React from 'react';
import PropTypes from 'prop-types';

const Tip = ({
  component: Component,
  children,
  tooltip,
  place,
  setTooltip,
  unsetTooltip,
  ...props
}) => (
  <Component
    {...props}
    data-tip
    data-for="global"
    onMouseOver={setTooltip(tooltip, place)}
    onFocus={setTooltip(tooltip, place)}
    onMouseLeave={unsetTooltip}
  >
    {children}
  </Component>
);

Tip.propTypes = {
  component: PropTypes.func.isRequired,
  children: PropTypes.any,
  tooltip: PropTypes.string.isRequired,
  setTooltip: PropTypes.func.isRequired,
  unsetTooltip: PropTypes.func.isRequired,
  place: PropTypes.string,
};

Tip.defaultProps = {
  children: null,
  place: 'bottom',
};

export default Tip;
