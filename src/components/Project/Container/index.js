import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap/TweenMax';

import CloseIcon from '~/containers/Project/Container/CloseIcon';
import Div from './Div';
import Content from './Content';
import FlexDiv from './FlexDiv';

class ContainerProject extends React.Component {
  state = {
    ref: React.createRef(),
  };

  onEnter = () => {
    const target = this.getTarget();
    TweenMax.from(target, 0.5, {
      opacity: 0,
      height: 0,
    });
  };

  onExit = () => {
    const target = this.getTarget();
    TweenMax.to(target, 0.5, {
      opacity: 0,
      height: 0,
    });
  };

  getTarget = () => this.state.ref.current;

  render() {
    const { children, isProjectOpen } = this.props;
    const { ref } = this.state;
    return (
      <Transition
        in={isProjectOpen}
        onEnter={this.onEnter}
        onExit={this.onExit}
        exit
        appear
        enter
        mountOnEnter
        unmountOnExit
        timeout={500}
      >
        <Div innerRef={ref}>
          <CloseIcon />
          <FlexDiv>
            <Content>
              {children}
            </Content>
          </FlexDiv>
        </Div>
      </Transition>
    );
  }
}

ContainerProject.propTypes = {
  children: PropTypes.any.isRequired,
  isProjectOpen: PropTypes.bool.isRequired,
};

export default ContainerProject;
