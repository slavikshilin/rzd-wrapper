import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILED,
         REQUEST_LOGOUT, REQUEST_LOGOUT_SUCCESS, REQUEST_LOGOUT_FAILED } from '../actions/authActions'

const initialState = {
  userInfo: null,
  err: null,
  isFetching: false,  
}

export function authReducer(state = initialState, action) {
  switch (action.type) {

    case REQUEST_LOGIN:
    {
      let newState = { ...state, userInfo: null, err: null, isFetching: true };
      return newState;
    }   

    case REQUEST_LOGIN_SUCCESS:
    {
      let newState = { ...state, userInfo: action.payload, err: null, isFetching: false };
      return newState;
    }    
    
    case REQUEST_LOGIN_FAILED:
    {
      let newState = { ...state, userInfo: null, err: action.payload, isFetching: false };
      return newState;
    }  
    
    case REQUEST_LOGOUT:
    {
      let newState = { ...state, userInfo: null, err: null, isFetching: true };
      return newState;
    }   

    case REQUEST_LOGOUT_SUCCESS:
    {
      let newState = { ...state, userInfo: null, err: null, isFetching: false };
      return newState;
    }    
    
    case REQUEST_LOGOUT_FAILED:
    {
      let newState = { ...state, userInfo: null, err: action.payload, isFetching: false };
      return newState;
    }     

    default:
      return state
  }
}