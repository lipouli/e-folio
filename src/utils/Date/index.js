import React from 'react';
import PropTypes from 'prop-types';

const moisMap = {
  0: 'janvier',
  1: 'février',
  2: 'mars',
  3: 'avril',
  4: 'mai',
  5: 'juin',
  6: 'juillet',
  7: 'août',
  8: 'septembre',
  9: 'octobre',
  10: 'novembre',
  11: 'décembre',
};

const Date = ({ date, className }) => (
  <span className={className}>
    <time dateTime={date.toISOString()}>
      {`Le ${date.getDate()} ${moisMap[date.getMonth()]} ${date.getFullYear()}`}
    </time>
  </span>
);

Date.propTypes = {
  date: PropTypes.object.isRequired,
  className: PropTypes.string,
};

Date.defaultProps = {
  className: '',
}

export default Date;
