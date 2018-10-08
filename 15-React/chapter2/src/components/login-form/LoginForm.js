import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 监听用户名和密码两个 input 的值得变化
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('login successfully');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          用户名：
          {/* 通过 value 设置 Input 显示内容，通过 onChange 监听 value 的变化 */}
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          自己实现双向数据绑定：{this.state.name}
        </label>
        <label>
          密码：
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="登录" />
      </form>
    )
  }
}

export default LoginForm;