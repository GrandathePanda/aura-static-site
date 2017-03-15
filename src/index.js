import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
let hashHistory = Router.hashHistory;
var Home = React.createClass({
  render: function() {
    return (<h1>Welcome to the Home Page</h1>);
  }
});

ReactDOM.render( <Router history={browserHistory}><Route path="/" component={Home}></Route></Router>, document.getElementById('root'));
