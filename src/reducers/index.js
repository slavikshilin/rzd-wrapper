import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { trainsReducer } from './trainsReducer'
import { carsReducer } from './carsReducer'
import { searchReducer } from './searchReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  trains: trainsReducer,
  cars: carsReducer,
  search: searchReducer
})