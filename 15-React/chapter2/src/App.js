import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/post-list/PostList';
import PostList from './components/post-list/PostList';
import LoginForm from './components/login-form/LoginForm';
import StackForm from './components/stack-form/StackForm';
import SimpleForm from './components/simple-form/SimpleForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Hello World</p>
        </header>

        <div>
          <PostList />
          <LoginForm />
          <StackForm />
          <SimpleForm />
        </div>
      </div>
    );
  }
}

export default App;
