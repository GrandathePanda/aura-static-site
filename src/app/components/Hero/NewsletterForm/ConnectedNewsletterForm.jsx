import { connect } from 'react-redux'

import { graphql, compose } from 'react-apollo'

import { bindActionCreators } from 'redux'

import gql from 'graphql-tag'

import NewsletterForm from './NewsletterForm'

const signUp = gql`
  mutation($firstName: String!, $lastName: String!,  $email: String!, $organization: String) {
    newsletterSignUp(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      organization: $organization,
      url: "https://pibrain.io/signups/")
      {
        jsonResponse
    }
  }

`
const newsletterSignUp = graphql(signUp, {
  props: ({ mutate }) => ({
    newsletterSignUp: ( { firstName, lastName, email, organization } ) => {
      return mutate({
        variables: {
          firstName,
          lastName,
          email,
          organization,
        },
      })
    }
  }),
})

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      newsletterSignUp,
    },
    dispatch
  )
}


export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)(NewsletterForm)


