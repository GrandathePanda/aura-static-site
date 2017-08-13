import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import newsletterFormReducer from './newsletterFormReducer'

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  combinedForms,
})

const combinedForms = combineForms({
  newsletterFormReducer
})

