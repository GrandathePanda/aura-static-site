import React, { Component, PropTypes } from 'react';
import styles from './Automations.scss';
import CSSModules from 'react-css-modules';
import Automation from '../Automation/Automation.jsx';

export default class Automations extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		var automation_data = [
			{name:'name one', key:'000', interval: 'day', time: '9:00' },
			{name:'name two', key:'001', interval: 'week', time: '2:00' },
			{name:'name three', key:'002', interval: 'week', time: '12:00' },
			{name:'name four', key:'003', interval: 'week', time: '6:00' },
			{name:'name five', key:'004', interval: 'month', time: '11:00' },
			{name:'name six', key:'005', interval: 'year', time: '8:00' }
		];

		const AutomationsList = ({automations}) => (
			<div id= {"automations"} className="automation-container">
				<p className="section-title">Automations</p>
				{automations.map(automation => (
					<Automation key={automation.key} name={automation.name} interval={automation.interval} execTime={automation.time} />
				))}
			</div>
		);

		return (
			<AutomationsList automations={automation_data} />
		);
	}
}
