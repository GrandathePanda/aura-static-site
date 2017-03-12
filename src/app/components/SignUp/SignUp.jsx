import React, { Component, PropTypes } from 'react';
import styles from './SignUp.scss';
import InputField from '../InputField/InputField.jsx';
import CSSModules from 'react-css-modules';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", email:"", password: "", birthday: "", gender: "", location: "" };
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
    return true;
  }
  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render(props) {
    return (
      <div id="signup" className={this.props.active ? "signup-container active" : "signup-container" }>
      <form className="signup-form">
        <InputField
          type={"text"}
          className={"input first_name"}
          value={this.state.first_name}
          uniqueName="first_name"
          text="First Name"
          textArea={false}
          required={true}
          minCharacters={6}
          onChange={this.setValue.bind(this, 'first_name')}
          errorMessage="Your first name is a required field"
          emptyMessage="Your first name is a required field" />
          <br></br>
          <InputField
          type={"text"}
          className={"input last_name"}
          value={this.state.last_name}
          uniqueName="last_name"
          text="Last Name"
          textArea={false}
          required={true}
          minCharacters={6}
          onChange={this.setValue.bind(this, 'last_name')}
          errorMessage="Your last name is a required field"
          emptyMessage="Your last name is a required field" />
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
          emptyMessage="Email is required field!" />
      <br></br>
        <InputField
          type={"password"}
          className={"input password"}
          value={this.state.email}
          uniqueName="password"
          text="Create a Password"
          textArea={false}
          required={true}
          minCharacters={6}
          validate={this.validatePasswordStrength}
          onChange={this.setValue.bind(this, 'password')}
          errorMessage="Sorry, your password is not strong enough!"
          emptyMessage="Password is required field!" />
      <br></br>
        <InputField
          type={"password"}
          className={"input password-confirm"}
          value={this.state.password}
          uniqueName="password-confirm"
          text="Confirm your password"
          textArea={false}
          required={true}
          minCharacters={6}
          validate={this.validatePasswordMatch}
          onChange={this.setValue.bind(this, 'password')}
          errorMessage="Sorry, your password does not match..."
          emptyMessage="Retype your password is required field!" />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


