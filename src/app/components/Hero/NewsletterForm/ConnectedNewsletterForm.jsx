import { connect } from 'react-redux'

import { graphql, compose } from 'react-apollo'

import { bindActionCreators } from 'redux'

import gql from 'graphql-tag'

import NewsletterForm from './NewsletterForm'

const signUp = gql`
  mutation($firstName: String!, $lastName: String!,  $email: String!) {
    newsletterSignUp(firstName: $firstName, lastName: $lastName, email: $email, url: "https://pibrain.io/signups/") {
      jsonResponse
    }
  } 

`
const newsletterSignUp = graphql(signUp, {
  props: ({ mutate }) => ({
    newsletterSignUp: ( { firstName, lastName, email } ) => {
      return mutate({
        variables: {
          name,
          email
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


