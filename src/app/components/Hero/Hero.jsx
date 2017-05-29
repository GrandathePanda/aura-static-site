import React, { Component } from 'react';
import styles from './Hero.scss';
import InputField from '../InputField/InputField.jsx';
import CSSModules from 'react-css-modules';


class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email:"" };
  }
  commonValidate() {
    return true;
  }

  setValue(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleSubmit(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var name = this.state.name;
    if (!email || !name) {
      return;
    }

    this.props.onSubmit({email: email, name: name });
    this.setState({
      email: '',
      name: ''
    });
  }

  validateEmail(value) {
    //email regex
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

render(props) {
    return (
      <div id="hero">
      <div className="center-container">
        <p className="hero-text">
      <span className="byline">Artificial assistant, speeding up and simplifying tedious tasks so you or your employees can worry about the real work.</span><br></br><br></br>
          <span className="byline">Get updates about the development and release of Aura. Sign-up to receive updates about the development, release and milestones for Aura.</span>
      </p>
      <form className="newsletter-form">
      <InputField
        type={"text"}
        className={"input name"}
        value={this.state.name}
        uniqueName="name_field"
        text="Full Name"
        textArea={false}
        required={true}
        minCharacters={6}
        validate={this.commonValidate}
        onChange={this.setValue.bind(this, 'name')}
        errorMessage="Your name is a required field"
        emptyMessage="Your name is a required field" />
      <br></br>
      <InputField
        type={"text"}
        className={"input email"}
        value={this.state.email}
        uniqueName="email_field"
        text="Email Addresss"
        textArea={false}
        required={true}
        minCharacters={6}
        validate={this.validateEmail()}
        onChange={this.setValue.bind(this, 'email')}
        errorMessage="Your email is a required field"
        emptyMessage="Your email is a required field" />
      <br></br>
      <input className="submit-btn" type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}
}

export default CSSModules( Hero, styles )
