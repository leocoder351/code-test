import React, { Component } from 'react';

const withPersistentData = (key) => (WrappedComponent) => {
  return class extends Component {
    componentWillMount() {
      let data = localStorage.getItem(key);
      this.setState({
        data
      });
    }

    render() {
      // 通过 {...props} 把传递给当前组件的属性继续传递给被包装组件
      return <WrappedComponent data={this.state.data} {...props} />
    }
  }
}

class MyComponent extends Component {
  render() {
    return <div>{this.props.data}</div>
  }
}

// 获取 key='data' 的数据
const MyComponent1WithPersistentData = withPersistentData('data')(MyComponent);

// 获取 key='name' 的数据
const MyComponent2WithPersistentData = withPersistentData('name')(MyComponent);