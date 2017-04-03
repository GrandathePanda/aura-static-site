import React, { Component } from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.jsx';
import styles from './Contact.scss';
import CSSModules from 'react-css-modules';

class Contact extends Component {

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

export default CSSModules( Contact, styles )
