import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app/App.js';
import Home from './app/containers/Home/Home.js';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={Home}/>
  </Route>
  </Router>, document.getElementById('root'));
