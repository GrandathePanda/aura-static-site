import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app/App.js';
import Home from './app/containers/Home/Home.js';
import About from './app/containers/About/About.js';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About} />
  </Route>
  </Router>, document.getElementById('root'));
