import { connect } from 'react-redux'

import { graphql, compose } from 'react-apollo'

import { bindActionCreators } from 'redux'

import gql from 'graphql-tag'

import NewsletterForm from './NewsletterForm'

const signUp = gql`
  mutation($firstName: String!, $lastName: String!,  $email: String!, $url: String!, $organization: String) {
    newsletterSignUp(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      organization: $organization,
      url: $url
    )
  }
`
const newsletterSignUp = graphql(signUp, {
  name: 'newsletterSignUp',
  props: ({ newsletterSignUp }) => ({
    newsletterSignUp: ( { firstName, lastName, email, url, organization } ) => {
      return newsletterSignUp({
        variables: {
          firstName,
          lastName,
          email,
          url,
          organization,
        },
      })
    }
  }),
})

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { },
    dispatch
  )
}


export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  newsletterSignUp,
)(NewsletterForm)


