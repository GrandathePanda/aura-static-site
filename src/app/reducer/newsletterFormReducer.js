import { formReducer, modelReducer } from 'react-redux-form'


const initialState= {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
}


export const newsletterFormReducer = formReducer('newsletter', initialState)
export const newsletterModelReducer = modelReducer('newsletter', initialState)
