import { REQUEST_CARS, REQUEST_CARS_SUCCESS, REQUEST_CARS_FAILED, REQUEST_CARS_CLEAR } from '../actions/carsActions'
  
  const initialState = {
    carsInfo: null,
    err: null,
    isFetching: false,
  }
  
  export function carsReducer(state = initialState, action) {
    switch (action.type) {
  
      case REQUEST_CARS:
        {
          let newState = { ...state, carsInfo: null, err: null, isFetching: true }
          return newState
        }
  
      case REQUEST_CARS_SUCCESS:
        {
          let newState = { ...state, carsInfo: action.payload, err: null, isFetching: false }
          return newState
        }
  
      case REQUEST_CARS_FAILED:
        {
          let newState = { ...state, carsInfo: null, err: action.payload, isFetching: false }
          return newState
        }

        case REQUEST_CARS_CLEAR:
        {
          return initialState
        }      
  
      default:
        return state
    }
  }