import React from 'react';
import styles from './Header.scss';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

class Header extends React.Component {
  render (props) {

    var logoPath = require("../../../assets/logo.png");

    var imgStyle = [
      {
        backgroundImage: 'url(' + logoPath +')',
      }
    ];
    return (
      <div className="header">
        <Link to={'/'} className="logo"><div className="logo-c" style={imgStyle[0]}></div>
          <p className="logo-text">PiBrain</p></Link>
      <div className="links-container">
        {/*
      <ReactCSSTransitionGroup transitionName = "header-fade"
      transitionAppear = {true} transitionAppearTimeout = {500}
      transitionEnter = {false} transitionLeave = {false}>
      <Link to={'/about'} className="links">A B O U T</Link>
      <Link to={'/faq'} className="links">F A Q</Link>
      <Link to={'/contact'} className="links">C O N T A C T</Link>
      <p className="links profile" onClick={ this.props.sidebar_active ? this.props.toggleSidebar.bind(null, false) : this.props.toggleSidebar.bind(null, true) }>profile_img</p>
      </ReactCSSTransitionGroup>
            */}
      </div>
      </div>

    );
  }
}
export default CSSModules(Header, styles)
