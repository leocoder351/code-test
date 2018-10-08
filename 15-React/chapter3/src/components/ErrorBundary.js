import React, { Component } from 'react';

class ErrorBundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
    console.log('children', this.props.children);
  }

  componentDidCatch(error, info) {
    // 显示错误 UI
    this.setState({
      hasError: true
    });

    // 同时输出错误日志
    console.log(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong!</h1>
    }

    return this.props.chidren;
  }
}

export default ErrorBundary;