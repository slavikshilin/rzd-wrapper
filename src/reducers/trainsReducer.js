import { REQUEST_TRAINS, REQUEST_TRAINS_SUCCESS, REQUEST_TRAINS_FAILED, REQUEST_TRAINS_CLEAR } from '../actions/trainsActions'
  
  const initialState = {
    trainsInfo: null,
    err: null,
    isFetching: false,
  }
  
  export function trainsReducer(state = initialState, action) {
    switch (action.type) {
  
      case REQUEST_TRAINS:
        {
          let newState = { ...state, trainsInfo: null, err: null, isFetching: true }
          return newState
        }
  
      case REQUEST_TRAINS_SUCCESS:
        {
          let newState = { ...state, trainsInfo: action.payload, err: null, isFetching: false }
          return newState
        }
  
      case REQUEST_TRAINS_FAILED:
        {
          let newState = { ...state, trainsInfo: null, err: action.payload, isFetching: false }
          return newState
        }

        case REQUEST_TRAINS_CLEAR:
        {
          return initialState
        }      
  
      default:
        return state
    }
  }