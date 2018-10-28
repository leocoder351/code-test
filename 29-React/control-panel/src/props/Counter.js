import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor (props) {
    console.log('enter constructor: ' + props.caption);
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
  
    this.state = {
      count: props.initValue
    };
  }

  onClickIncrementButton () {
    this.updateCount(true);
  }

  onClickDecrementButton () {
    this.updateCount(false);
  }

  updateCount (isIncrement) {
    const previousCount = this.state.count;
    const newCount = isIncrement ? previousCount + 1 : previousCount - 1;
    this.setState({
      count: newCount
    });
    this.props.onUpdate(newCount, previousCount);
  }

  /*
  getInitialState () {
    console.log('enter getInitialState');
  }

  getDefaultProps () {
    console.log('enter getDefaultProps');
  }
  */

  componentWillMount () {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount () {
    console.log('enter componentDidMount ' + this.props.caption);
  }

  componentWillReceiveProps (nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate ' + this.props.caption);
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  componentWillUpdate () {
    console.log('enter componentWillUpdate');
  }

  componentDidUpdate () {
    console.log('enter componentDidUpdate');
  }

  componentWillUnmount () {
    console.log('enter componentWillUnmount');
  }

  render() {
    console.log('enter render ' + this.props.caption);
    console.log('enter render count' + this.state.count);
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => {}  // 默认是一个什么都不做的函数
};

console.log(PropTypes);

export default Counter;