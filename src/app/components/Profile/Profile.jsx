import React, { Component, PropTypes } from 'react';
import styles from './Profile.scss';
import Automations from '../Automations/Automations.jsx';
import CSSModules from 'react-css-modules';

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<div className ="profile-container">
				<div className ="bio"></div>
				<div className="info-container">
					<p id = {"name"} className="info"><span id = {"first_name"}>first Name</span> <span id={"last_name"}>Last Name</span></p>
					<p id = {"birthday"} className="info" >06/21/90</p>
					<p id = {"email"} className="info" >blah@pibrain.io</p>
				</div>
				<Automations />
			</div>
		);
	}
}
