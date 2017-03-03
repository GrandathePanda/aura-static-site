import React, { Component, PropTypes } from 'react';
import styles from './Automation.scss';
import CSSModules from 'react-css-modules';

export default class Automation extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<div>
				<div className="automation-command">
					<p className="title">{this.props.name}</p>
					<div className="controls">
						<img className="edit" src={require("../../../assets/edit_B.png")}></img>
						<img className="delete" src={require("../../../assets/close.png")}></img>
					</div>
				</div>
				<div className="expanded-menu hide">
					<p className="interval">{this.props.interval}</p>
					<p className="interval">{this.props.execTime}</p>
				</div>
			</div>

		);
	}
}
