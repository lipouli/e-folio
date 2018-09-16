import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Loading from './Loading';

class Container extends React.Component {
  state = {
    __html: '',
    height: 0,
    width: 0,
    loading: true,
  }

  componentDidMount() {
    const { url } = this.props;
    this.sizeIframe();
    window.addEventListener('resize', this.sizeIframe);
    axios.get(url)
      .then(({ data }) => {
        this.setState({
          __html: data,
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.sizeIframe);
  }

  sizeIframe = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    const {
      __html,
      height,
      width,
      loading,
    } = this.state;
    const { title } = this.props;
    return (
      loading ? <Loading /> :
      <iframe
        title={title}
        srcDoc={__html}
        height={`${height}px`}
        width={`${width}px`}
        allowFullScreen
      />
    );
  }
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Container;
