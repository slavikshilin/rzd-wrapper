//import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILED = 'REQUEST_LOGIN_FAILED'

export const LOGIN_FAILED = 'LOGIN_FAILED'

function requestLogin() {
  return {
    type: REQUEST_LOGIN
  }
}

function requestLoginSuccess(userInfo) {
  return {
    type: REQUEST_LOGIN_SUCCESS,
    payload: userInfo
  }
}

function requestLoginError(err) {
  return {
    type: LOGIN_FAILED,
    payload: err
  }
}

function loginError(err) {
  return {
    type: REQUEST_LOGIN_FAILED,
    payload: err
  }
}

export function checkLogin(login, password, history) {
  return (dispatch) => {

    if ((login === 'test') && (password === 'test')) {
      let token = { login: 'test', name: 'Супертестер' }

      //сохранение токена в localStorage
      localStorage.setItem('cks_token', JSON.stringify(token))
      history.push("/");
    } else {
      dispatch(loginError(new Error('Неверный логин или пароль')))
    }
  }
};

/*eslint-disable */
export function fetchLogin(login, password, history) {
  return (dispatch) => {
    dispatch(requestLogin());

    fetch(`http://localhost:8124/selfcare/j_security_check/ru?j_username=${login}&j_password=${password}`)
      .then(
        function (res) {

          if (res.ok) {
            console.log(res.headers)
            return res.json()
          }

          throw new Error(`Network response was not ok. ${res.status} ${res.statusText}`)
        }
      )
      .then(

        function (res) {
          var lToken = res.token

          fetch(`http://localhost:8124/selfcare/user?token=${res.token}`)
            .then(
              function (res) {

                if (res.ok) {
                  return res.json()
                }
                throw new Error(`Network response was not ok. ${res.status} ${res.statusText}`)
              }
            )
            .then( 
              userInfo => { 
                  dispatch(requestLoginSuccess(userInfo.data))
                  //сохранение токена в localStorage
                  localStorage.setItem('cks_token', lToken)
                  history.push("/")
                },
                err => dispatch(requestLoginError(err))
            )
        }
      );

  }
};
/*eslint-enable */
