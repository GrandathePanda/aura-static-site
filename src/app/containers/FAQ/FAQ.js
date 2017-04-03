import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.jsx';
import styles from './FAQ.scss';
import CSSModules from 'react-css-modules';
import Particles from 'react-particles-js';

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
      <Particles className="particle-canvas" width={'100%'} height={'125vh'} params={{
        particles: {
          number: {
            value: 125,
            enable: true,
            value_area:800
          },
          color: {
            value: '#000000'
          },
          opacity: {
              value: 1
          },
          shape: {
            polygon: {
              nb_sides: 12
            }
          },
          line_linked: {
            enable: true,
            color: "#000000",
          },
          move: {
            enable: true,
            speed: 1.3
          }
        }
      }} />
        <div className="faq-hero">
          <div className="hero"></div>
        </div>
        <div className="section-container">
          <p className="section-title">Frequently Asked Questions</p>
          <div className="body-copy">
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules( FAQ, styles )
