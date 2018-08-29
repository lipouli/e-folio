import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap/TweenMax';

import Div from './Div';

class TransitionRoute extends React.Component {
  state = {
    ref: React.createRef(),
  }

  enterAnimation = () => {
    const target = this.state.ref.current;
    TweenMax.from(target, 0.5, {
      opacity: 0,
      height: 0,
    });
  }

  exitAnimation = () => {
    const target = this.state.ref.current;
    TweenMax.to(target, 0.5, {
      opacity: 0,
      height: 0,
    });
  }

  render() {
    const {
      component: Component,
      ...props
    } = this.props;
    const { ref } = this.state;
    return (
      <Transition
        timeout={500}
        onEnter={this.enterAnimation}
        onExit={this.exitAnimation}
        {...props}
      >
        <Div innerRef={ref}>
          <Component />
        </Div>
      </Transition>
    );
  }
}

TransitionRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default TransitionRoute;
