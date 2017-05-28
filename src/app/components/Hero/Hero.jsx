import React, { Component } from 'react';
import styles from './Hero.scss';
import CSSModules from 'react-css-modules';
class Hero extends Component {

  render(props) {
    return (<div id="hero"></div>);
  }
}

export default CSSModules( Hero, styles )
