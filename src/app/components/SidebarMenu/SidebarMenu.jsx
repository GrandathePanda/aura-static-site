import React, { Component, PropTypes } from 'react';
import styles from './SidebarMenu.scss';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import SideHeader from '../SideHeader/SideHeader.jsx';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      <div className={ this.props.active ? 'side-container active' : 'side-container active' } >
      <Profile active={this.state.profile_active} />
      <SideHeader active={this.state.toggleLogin} toggleLogin={this.toggleLogin} animate={true} />
      <Login active={this.state.toggleLogin} />
      <Signup active={!this.state.toggleLogin} />
      <p className={this.state.toggleLogin ? "footer-links" : "footer-links adjust"}><span className="link">Privacy</span> / <span className="link">Terms</span> / piBrain © {new Date().getFullYear()} </p>
      </div>
    );
  }
}
export default CSSModules(SidebarMenu, styles);
