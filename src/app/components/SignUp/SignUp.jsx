import React, { Component, PropTypes } from 'react';
import styles from './SignUp.scss';
import InputField from '../InputField/InputField.jsx';
import CSSModules from 'react-css-modules';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { first_name: "", last_name: "", email:"", password: "" };
	}

	render(props) {
		return ( <div></div> );
	}
}


