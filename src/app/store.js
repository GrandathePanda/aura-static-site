import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import {
  combineForms,
} from 'react-redux-form';
import { newsletterFormReducer, newsletterModelReducer } from './reducer/newsletterFormReducer'
import thunk from 'redux-thunk';


const combinedReducers = combineReducers({
  newsletterForm: newsletterFormReducer,
  newsletter: newsletterModelReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
