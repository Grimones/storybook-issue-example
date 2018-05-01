import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };

    this.canvas = undefined;
    this.handleRef = this.handleRef.bind(this);
  }

  componentDidMount() {
    if (this.props.fix) {
      setTimeout(() => this.doThingsOnMount(), 10);
    }
    else {
      this.doThingsOnMount();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { height, width } = this.state;
    if (width !== prevState.width || height !== prevState.height) {
      const ctx = this.canvas.getContext('2d');
      ctx.fillStyle = this.props.color;
      ctx.fillRect(0, 0, width, height);
      ctx.fill();
    }
  }

  doThingsOnMount() {
    const { clientWidth: width, clientHeight: height } = this.canvas.parentNode;
    console.log(`width: ${width}, height: ${height}`);
    if (width === 0 || height === 0) {
      console.warn('width or height of parentNode is 0');
    }
    this.setState({ width, height });
  }

  handleRef(ref) {
    this.canvas = ref;
  }

  render() {
    const { height, width } = this.state;
    return (
      <canvas
        ref={this.handleRef}
        style={{ width: '100%', height: '100%' }}
        width={width}
        height={height}
      />
    );
  }
}

export default Canvas;