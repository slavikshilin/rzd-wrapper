import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { trainsReducer } from './trainsReducer'
import { searchReducer } from './searchReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  trains: trainsReducer,
  search: searchReducer
})