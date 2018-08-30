import React from 'react';
import PropTypes from 'prop-types';
import TweenMax, { Bounce } from 'gsap/TweenMax';
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { activable, hover } from '~/styles/color';
import G from './G';

class MenuItem extends React.Component {
  state = {
    ref: React.createRef(),
    hoverRef: React.createRef(),
    isOpen: false,
    timeout: this.props.delay / 1000 * this.props.index,
    hovered: false,
  }

  componentDidMount() {
    const { menuIsOpen } = this.props;
    if (menuIsOpen) {
      this.delayedOpenning();
    }
  }

  componentDidUpdate(prevProps) {
    const { menuIsOpen } = this.props;
    if (menuIsOpen !== prevProps.menuIsOpen) {
      this.setState({
        isOpen: false,
      });
    }
  }

  onEnter = () => {
    const target = this.state.ref.current;
    TweenMax.from(target, 1, {
      transformOrigin: 'center center',
      scale: 0,
      ease: Bounce.easeOut,
    });
  }

  onExit = () => {
    const target = this.state.ref.current;
    const { timeout } = this.state;
    TweenMax.to(target, 1, {
      transformOrigin: 'center center',
      scale: 0,
      ease: Bounce.easeOut,
      delay: timeout,
    });
  }

  clickHandler = (e) => {
    e.stopPropagation();
    console.log(this.props);
  }

  delayedOpenning = () => {
    const { timeout } = this.state;
    setTimeout(this.openItem, timeout * 1000);
  }

  openItem = () => {
    this.setState({
      isOpen: true,
    });
  }

  hovered = () => {
    const target = this.state.ref.current;
    TweenMax.to(target, 0.5, {
      fill: 'green',
    });
    this.setState({
      hovered: true,
    });
  }

  unHovered = () => {
    const target = this.state.ref.current;
    TweenMax.to(target, 0.5, {
      fill: 'black',
    });
    this.setState({
      hovered: false,
    });
  }

  animeIcon = () => {
    TweenMax.to(this.state.hoverRef.current, 0.1, {
      rotation: 360,
      transformOrigin: 'center center',
    });
  }

  render() {
    const {
      path,
      label,
      labelPosition,
      icon,
    } = this.props;
    const labelPosX = labelPosition[0];
    const labelPosY = labelPosition[1];
    const {
      ref,
      isOpen,
      hovered,
      hoverRef,
    } = this.state;
    return (
      <Transition
        onEnter={this.onEnter}
        onExit={this.onExit}
        timeout={1500}
        in={isOpen}
        appear
        exit
        unmountOnExit
      >
        <g
          ref={ref}
          onClick={this.clickHandler}
          onMouseEnter={this.hovered}
          onMouseLeave={this.unHovered}
          className={G}
        >
          <path className="test" id={`${label}-path`} d={path} />
          <Transition
            in={!hovered}
            timeout={100}
            unmountOnExit
          >
            <FontAwesomeIcon
              color={hovered ? hover : activable}
              height="40"
              width="40"
              x={labelPosX - 20}
              y={labelPosY - 20}
              icon={icon}
            />
          </Transition>
          <Transition
            in={hovered}
            timeout={100}
            unmountOnExit
            exit
            onEnter={this.animeIcon}
            onExit={this.animeIcon}
          >
            <text
              ref={hoverRef}
              x={labelPosX}
              y={labelPosY + 10}
              fill={activable}
              textAnchor="middle"
            >
              {label}
            </text>
          </Transition>
        </g>
      </Transition>
    );
  }
}

MenuItem.propTypes = {
  path: PropTypes.string,
  menuIsOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  labelPosition: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
  refTo: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  path: '',
};

export default MenuItem;
