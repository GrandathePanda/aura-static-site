import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.jsx';
import styles from './Support.scss';
import CSSModules from 'react-css-modules';

class Support extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render(props) {
    return (
      <div>
      <h1>about</h1>
      </div>
    );
  }
}

export default CSSModules( Support, styles )
