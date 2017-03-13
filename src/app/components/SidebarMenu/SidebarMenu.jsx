import React, { Component, PropTypes } from 'react';
import styles from './SidebarMenu.scss';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import CSSModules from 'react-css-modules';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_active: false,
      toggleLogin: true
    }

    this.displayProfile = this.displayProfile.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  displayProfile () {
    //manages the state of login for the profile
    if (this.props.loggedIn) {
      this.setState( { profile_active: true } );
    }
  }

  toggleLogin ( bool ) {
    //when login is false, signup is displayed
    if (this.state.profile_active) {
      return; 
    }

    else {
      console.log(bool);
      this.setState( {toggleLogin: bool } );
    }

  }

  render(props) {
    return (
      <div className={ this.props.active ? 'side-container active' : 'side-container' } >
        <Profile active={this.state.profile_active} />
        <div className="header-container">
          <p className="login-header">
      <span className={this.state.toggleLogin ? "login active" : "login"} onClick={ () => this.toggleLogin(true)}>Login</span>|
      <span className={this.state.toggleLogin ? "signup" : "signup active"} onClick={ () => this.toggleLogin(false)}>Signup</span>
          </p>
        </div>
        <Login active={this.state.toggleLogin} />
        <Signup active={!this.state.toggleLogin} />
        <p className={this.state.toggleLogin ? "footer-links" : "footer-links adjust"}><span className="link">Privacy</span> / <span className="link">Terms</span> / piBrain © {new Date().getFullYear()} </p>
      </div>
    );
  }
}
export default CSSModules(SidebarMenu, styles);
