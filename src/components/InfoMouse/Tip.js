import React from 'react';
import PropTypes from 'prop-types';

const Tip = ({
  component: Component,
  children,
  tooltip,
  setTooltip,
  unsetTooltip,
}) => (
  <Component
    data-tip
    data-for="global"
    onMouseEnter={setTooltip(tooltip)}
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
};

Tip.defaultProps = {
  children: null,
};

export default Tip;
