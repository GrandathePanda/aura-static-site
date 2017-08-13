import { formReducer } from 'react-redux-form'


const initialState= {
  firstName: "",
  lastName: "",
  email: "",
  organizationl: "",
}


export default formReducer('newsletter', initialState)
