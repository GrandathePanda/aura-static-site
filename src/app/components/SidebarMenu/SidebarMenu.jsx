import React, { Component, PropTypes } from 'react';
import styles from './SidebarMenu.scss';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import CSSModules from 'react-css-modules';

export default class SidebarMenu extends Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		return (
			<div className = { this.props.active ? 'side-container active' : 'side-container' } >
				<Profile />
				<Login />
				<SignUp />
			</div>
		);
	}
}
