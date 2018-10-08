import React, { Component } from 'react';

function withControlledState(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };

      this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event) {
      this.setState({
        value: event.target.value
      });
    }

    render() {
      // newProps 保存受控组件需要使用的属性和事件处理函数
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }
      return (
        <WrappedComponent {...this.props} {...newProps} />
      )
    }
  }
}

class SimpleControlledComponent extends Component {
  render() {
    // 此时的SImpleControlledComponent为无状态组件，状态由高阶组件维护
    return (
      <input type="text" name="simple" {...this.props.controlledProps} />
    )
  }
}

const ComponentWithControlledState = withControlledState(SimpleControlledComponent);