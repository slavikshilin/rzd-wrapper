import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { trainsReducer } from './trainsReducer'

export const rootReducer = combineReducers({
  page: authReducer,
  trains: trainsReducer
})