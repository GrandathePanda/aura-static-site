import React, { Component, PropTypes } from 'react';
import styles from './Profile.scss';
import Automations from '../Automations/Automations.jsx';
import CSSModules from 'react-css-modules';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return(
      <div>
      <div className={this.props.active ? "profile-container active" : "profile-container"}>
      <Automations />
      </div>
      </div>
    );
  }
}
