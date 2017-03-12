import React, { Component, PropTypes } from 'react';
import styles from './SidebarMenu.scss';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import CSSModules from 'react-css-modules';

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_active: false,
      signup_clicked: false
    }

    this.displayProfile = this.displayProfile.bind(this);
  }

  displayProfile () {
    //manages the state of login for the profile
    if (this.props.loggedIn) {
      this.setState( { profile_active: true } );
    }
  }

  render(props) {
    return (
      <div className = { this.props.active ? 'side-container active' : 'side-container' } >
        <Profile active={this.state.profile_active} />
        <div className="header-container">
          <p className="login-header"><span className="login active">Login</span> / <span className="signup">Signup</span></p>
        </div>
        <Login active={!this.state.profile_active} />
        <SignUp active={this.state.signup_clicked} />
        <p className="footer-links"><span className="link">Privacy</span> / <span className="link">Terms</span> / piBrain © {new Date().getFullYear()} </p>
      </div>
    );
  }
}
