import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);

    // 根节点下创建一个 div 节点
    this.container = document.createElement('div');
    document.body.appendChild(this.container);

    console.log('container', this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    // 创建的 DOM 树挂载到 this.container 指向的 div 节点下面
    return ReactDOM.createPortal(
      <div>
        <span onClick={this.props.onClose}>&times;</span>
        <div>{this.props.children}</div>
      </div>,
      this.container
    )
  }
}

export default Modal;