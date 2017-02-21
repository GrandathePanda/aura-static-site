import React, { Component, PropTypes } from 'react';
import styles from './Automations.scss';
import CSSModules from 'react-css-modules';

export default class Automations extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<div id = {"automation"} className="automation-container">
				<div className="automation-command">
				</div>
				<div className="automation-command">
				</div>
				<div className="automation-command">
				</div>
				<div className="automation-command">
				</div>
				<div className="automation-command">
				</div>

			</div>
		);
	}
}
