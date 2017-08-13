import React, { Component } from 'react';
import styles from './NewsletterForm.scss';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Errors, Field, Form, Control, actions } from 'react-redux-form';

const isEmail = (value) => {
  //email regex
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}

const isRequired = (value) => ( value.length > 0 ? true : false )

const isLongEnough = (minLength, value) => { 
  console.log(minLength, value);
  const yup = value.length >= minLength ? true : false
  return yup
}

const newsletterFields = [
  { errorAttribs: {
      length: "Minimum length is 2.",
      required: "Your first name is a required field.",
    },
    fieldAttribs: {
      model: 'newsletter.firstName',
      placeholder: 'First Name',
      validators: { required: isRequired, length: isLongEnough.bind(null, 2) },
    },
    uniqueName: 'newsletter-input-firstname', },
  { errorAttribs: {
      length: "Minimum length is 2.",
      required: "Your last name is a required field.",
    },
    fieldAttribs: {
      model: 'newsletter.lastName',
      placeholder: 'Last Name',
      validators: { required: isRequired, length: isLongEnough.bind(null, 2) },
    },
    uniqueName: 'newsletter-input-lastname', },
  { errorAttribs: {
      email: "Please check that this is a valid email.",
      length: "Minium length is 11.",
      required: "Your email is a required field.",
    },
    fieldAttribs: {
      model: 'newsletter.email',
      placeholder: 'Email',
      validators: { required: isRequired, email: isEmail, length: isLongEnough.bind(null, 11) },
    },
    uniqueName: 'newsletter-input-email', },
  { errorAttribs: {
    },
    fieldAttribs: {
      model: 'newsletter.organization',
      placeholder: 'Organization (Optional)',
      validators: { length: isLongEnough.bind(null, 2) },
    },
    uniqueName: 'newsletter-input-organization',},
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
          {...fields.fieldAttribs}
          updateOn='change'
          validateOn='blur'
        />
        <Errors
          model={fields.fieldAttribs.model}
          messages={fields.errorAttribs}
          component='li'
          show={{touched: true, focused: true}}
        />
        <br></br>
      </div>)
    })
  }


  render(props) {
    let newsletter = this.props;
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
