import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponentWithPersistentData';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="liu" age="20" />
      </div>
    );
  }
}

export default App;
