import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './components/ListComponent';
import StringComponent from './components/StringComponent';
import ErrorBundary from './components/ErrorBundary';
import Modal from './components/Modal';

const Profile = ({ user }) => <div>name: { user.name }</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'react'
      },
      showModal: true
    };
  }

  // 将 user 设置为 null，模拟异常
  onClick = () => {
    this.setState({
      user: null
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        {/* <ErrorBundary>
          <Profile user={this.state.user} />
        </ErrorBundary> */}
        <ul>
          <ListComponent />
        </ul>
        <StringComponent />
        
        {
          this.state.showModal &&  
          <Modal onClose={this.closeModal}>Modal Dialog</Modal>
        }
      </div>
    );
  }
}

export default App;
