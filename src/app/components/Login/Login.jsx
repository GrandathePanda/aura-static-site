import React, { Component, PropTypes } from 'react';
import styles from './Login.scss';
import InputField from '../InputField/InputField.jsx';
import CSSModules from 'react-css-modules';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { email:"", password: "" };
	}
	handleSubmit(e) {
		e.preventDefault();
		var email = this.state.email.trim();
		var password = this.state.amount;
		if (!email || !password) {
			return;
		}

    		this.props.onSubmit({email: email, password: password });
		this.setState({
			email: '',
			password: ''
		});
	}

	validateEmail(value) {
		//email regex
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(value);
	}

	validatePassword( value ) {
		return true;
	}
	commonValidate() {
		return true
	}
  	setValue(field, event) {
		var object = {};
		object[field] = event.target.value;
		this.setState(object);
	}

	render(props) {
		return (
			<div id="login-form">
				<form>
					<InputField
						type={"email"}
						className={"input email"}
						value={this.state.email}
						uniqueName="email"
						text="Email Address"
						textArea={false}
						required={true}
						minCharacters={6}
						validate={this.validateEmail}
						onChange={this.setValue.bind(this, 'email')}
						errorMessage="Sorry, the email you've entered is invalid"
						emptyMessage="Email is required field" />
					<br></br>
					<InputField
						type={"email"}
						className={"input email"}
						value={this.state.email}
						uniqueName="email"
						text="Email Address"
						textArea={false}
						required={true}
						minCharacters={6}
						validate={this.validateEmail}
						onChange={this.setValue.bind(this, 'email')}
						errorMessage="Sorry, the email you've entered is invalid"
						emptyMessage="Email is required field" />

					<input className="submit-btn" type="submit" value="submit" />
				</form>
			</div>
		);
	}
}
