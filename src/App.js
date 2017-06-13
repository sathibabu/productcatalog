import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


import Home from './pages/home';
import Upload from './pages/upload';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
         <Route path='/upload' component={Upload} />
      </Router>
    );
  }
}

export default App;
