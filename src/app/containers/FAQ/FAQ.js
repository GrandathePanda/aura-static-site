import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.jsx';
import styles from './FAQ.scss';
import CSSModules from 'react-css-modules';

class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin () {
    //manages the state of login validation from the server should go here
    this.setState( { loggedIn: true } );
  }

  render(props) {
    return (
      <div id="faq" className="page-container">
        <div className="section-container">
          <p className="section-title">Meet the Team</p>
          <div className="body-copy">
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules( FAQ, styles )
