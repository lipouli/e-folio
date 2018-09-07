import React from 'react';
import axios from 'axios';

class Oblog extends React.Component {
  state = {
    __html: '',
    height: 0,
    width: 0,
  }

  componentDidMount() {
    this.sizeIframe();
    window.addEventListener('resize', this.sizeIframe);
    axios.get('/api/projects/oblog')
      .then(({ data }) => {
        this.setState({
          __html: data,
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
    const { __html, height, width } = this.state;
    return (
      <iframe
        title="Oblog"
        srcDoc={__html}
        height={`${height}px`}
        width={`${width}px`}
        allowFullScreen
      />
    );
  }
}

export default Oblog;
