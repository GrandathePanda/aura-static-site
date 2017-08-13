import React, { Component } from 'react';
import styles from './NewsletterForm.scss';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Field, Form, Control, actions } from 'react-redux-form';

const isEmail = (value) => {
  //email regex
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}

const isRequired = (value) => ( value.length > 0 ? true : false )

const isLongEnough = (minLength, value) => ( value.length >= minLength ? true : false )

const newsletterFields = [
  { model: 'newsletter.firstName',
    text: 'First Name',
    validators: { required: isRequired, length: isLongEnough.bind(null, 2) },
    uniqueName: 'newsletter-input-firstname',
    errorMessage: "Whoops! Something went wrong. (Min characters 2)",
    emptyMessage: "Your first name is a required field." },

  { model: 'newsletter.lastName',
    text: 'Last Name',
    validators: { required: isRequired, length: isLongEnough.bind(null, 2) },
    uniqueName: 'newsletter-input-lastname',
    errorMessage: "Whoops! Something went wrong. (Min characters 2)",
    emptyMessage: "Your last name is a required field." },

  { text: 'Email',
    model: 'newsletter.email',
    validators: { required: isRequired, email: isEmail, length: isLongEnough.bind(null, 11) },
    uniqueName: 'newsletter-input-email',
    errorMessage: "Please check that this is a valid email. (Min characters 11)",
    emptyMessage: "Your email is a required field.", },

  { text: 'Organization (Optional)',
    model: 'newsletter.organization',
    validators: { length: isLongEnough.bind(null, 2) },
    uniqueName: 'newsletter-input-organization',
    errorMessage: "Whoops! Something went wrong. (Min characters 2)",
    emptyMessage: "" },
]



class NewsletterForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit( newsletter ) {
    newsletter.newsletterSignUp()
  }

  inputFields() {
    const constructInputField = (props) => (<InputField {...props}/>)

    return newsletterFields.map((fields) => {
      return (<div key={fields.uniqueName}>
        <Control.text
          {...fields}
          updateOn='change'
          validateOn='blur'
        />
        <br></br>
      </div>)
    })
  }


  render(props) {
		let newsletter = this.props;
    console.log(this.inputFields())
    return (
      <Form model="newsletter" className="newsletter-form" onSubmit={this.handleSubmit.bind(this, newsletter)}>
          {this.inputFields()}
          <button className="submit-btn" type="submit" value="Submit">Sign Up!</button>
        </Form>
    );
  }
}

CSSModules( NewsletterForm, styles );
export default NewsletterForm;
