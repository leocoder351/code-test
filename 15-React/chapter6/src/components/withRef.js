import React, { Component } from 'react';

function withRef(WrappedCompnent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.someMethod = this.someMethod.bind(this);
    }

    someMethod() {
      this.wrappedInstance.someMethodInWrappedComponent();
    }

    render() {
      // 为被包装的组件添加 ref 属性，从而获取该组件实例并赋值给 this.wrappedInstance
      return (
        <WrappedCompnent ref=((instance) => this.wrappedInstance = instance) {...this.props} />
      )
    }
  }
}

export default withRef;