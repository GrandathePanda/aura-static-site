import React, { Component, PropTypes } from 'react';
import styles from './Profile.scss';
import Automations from '../Automations/Automations.jsx';
import CSSModules from 'react-css-modules';

class Profile extends Component {
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
export default CSSModules(Profile, styles);
