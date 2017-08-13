import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import About from '../../containers/About/About.js'
import Contact from '../../containers/Contact/Contact.js'
import Hero from '../../components/Hero/Hero.jsx';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.jsx';
import Chatbox from '../../components/Chatbox/Chatbox.jsx';
import styles from './Home.scss';
import CSSModules from 'react-css-modules';
import Particles from 'react-particles-js';

class Home extends Component {

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
      <div>
        <div className='app-container'>
          <SidebarMenu handleLogin={this.handleLogin} active={this.props.sidebar_active} />
          <div className={this.props.sidebar_active ? 'aura-container pushed' : 'aura-container' }>
          <p className="wc-title">Welcome to piBrain</p>
          <Hero />
          </div>
        </div>
        <About />
        <Contact />
      </div>
    );
  }
}

export default CSSModules( Home, styles )
