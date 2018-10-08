import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Siwtch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Posts}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/posts" component={Posts}></Route>
        </Switch>  
      </Router>
    );
  }
}

export default App;
