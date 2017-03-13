import React, { Component, PropTypes } from 'react';
import styles from './Signup.scss';
import InputField from '../InputField/InputField.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import CSSModules from 'react-css-modules';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", email:"", password: "", bd_month: "", bd_day: "", bd_year: "", gender: "", location: "" };

    this.createNumArray = this.createNumArray.bind(this);
    this.createYearArray = this.createYearArray.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password;
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

  createNumArray( maxValue ) {
    var options = [];
    for (let i=1; i <= maxValue; i++ ) {
      options.push({ value: i, label: i });
    }
    return options;
  }

  createYearArray ( startYear ) {
    var currentYear = new Date().getFullYear();
    var years = [];
    startYear = startYear || 1980;

    while ( startYear <= currentYear ) {
      startYear++;
      years.push({ value: startYear, label: startYear});
    }

    return years;
  }

  render(props) {
    var monthArray = this.createNumArray( 12 );
    var dayArray = this.createNumArray( 31 );
    var yearArray = this.createYearArray(1900);
    //const defaultM = monthArray[0];
    //const defaultD = dayArray[0];
    //const defaultY = yearArray[0];

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
      <br></br>
      <p className="form-label">Birthday</p>
      <div className="birthday-container">
      <Dropdown className="bd-input" options={monthArray} onChange={this.setValue} label={"month"} placeholder="Month" />
      <Dropdown className="bd-input" options={dayArray} onChange={this.setValue} label={"day"} placeholder="Day" />
      <Dropdown className="bd-input" options={yearArray} onChange={this.setValue} label={"year"} placeholder="Year" />
      </div>
      <input className="submit-btn" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
export default CSSModules(Signup, styles);

