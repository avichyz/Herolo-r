import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import movies from './moviesReducer';

const rootReducer = combineReducers({
  movies,
  form: formReducer
})


export default rootReducer;