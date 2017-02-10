import React, { Component, PropTypes } from 'react';
import styles from './Profile.scss';

var closeMenuBtn = React.createClass({
	render() {
		return (<button onClick={this.props.onClick}>{this.props.children}</button>)
	}
});

export default class Profile extends Component {

	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<div ref ="Profile" className = {(this.props.visible ? 'user active' : 'user')} >
				<div id ="profilepic"></div>
				<div style={useraccstyles.userinfowrapper}>
					<p id = "name" style={useraccstyles.p}><span id = {"first_name"}>first Name</span> <span id={"last_name"}>Last Name</span></p>
					<p id = {"birthday"} style={userAccStyles.p}>06/21/90</p>
					<p id = {"email"} style={userAccStyles.p}>blah@pibrain.io</p>
				</div>

				<div id = {"commands_list"} style = {userAccStyles.commandsList} className = "userCommands"></div>
				<p id = {"payment_method"} style={userAccStyles.p} className = "membership">Free Tier</p>

			</div>
		);
	}
}
