import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app/App.js';
import Home from './app/containers/Home/Home.js';
import About from './app/containers/About/About.js';
import FAQ from './app/containers/FAQ/FAQ.js';
import Support from './app/containers/Support/Support.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About} />
    <Route path="faq" component={FAQ} />
    <Route path="support" component={Support} />
  </Route>
  </Router>, document.getElementById('root'));
