import { LOGIN_FAILED, REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILED } from '../actions/loginActions'

const initialState = {
  userInfo: null,
  err: null,
  isFetching: false,  
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_FAILED:
    {
      let newState = { ...state, userInfo: null, err: action.payload };
      return newState;
    }      
      
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

    default:
      return state
  }
}