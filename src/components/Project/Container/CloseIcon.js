import React from 'react';
import PropTypes from 'prop-types';

import CloseIconDiv from './CloseIconDiv';

class CloseIcon extends React.Component {
  handleClose = () => {
    const { closeProject } = this.props;
    closeProject();
  }

  render() {
    return (
      <CloseIconDiv onClick={this.handleClose}>
        fermer
      </CloseIconDiv>
    );
  }
}

CloseIcon.propTypes = {
  closeProject: PropTypes.func.isRequired,
};

export default CloseIcon;
