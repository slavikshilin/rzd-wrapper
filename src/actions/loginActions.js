//import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILED = 'REQUEST_LOGIN_FAILED'

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const REQUEST_LOGOUT_SUCCESS = 'REQUEST_LOGOUT_SUCCESS'
export const REQUEST_LOGOUT_FAILED = 'REQUEST_LOGOUT_FAILED'


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
    type: REQUEST_LOGIN_FAILED,
    payload: err
  }
}

function requestLogout() {
  return {
    type: REQUEST_LOGOUT
  }
}

function requestLogoutSuccess() {
  return {
    type: REQUEST_LOGOUT_SUCCESS,
  }
}

function requestLogoutError(err) {
  return {
    type: REQUEST_LOGOUT_FAILED,
    payload: err
  }
}

export function fetchLogout(history) {
  return (dispatch) => {

    const { token } = JSON.parse(localStorage.getItem('cks_token'))
    localStorage.clear()
    dispatch(requestLogout());

    fetch(`https://rzd-proxy.herokuapp.com/selfcare/ibm_security_logout?logoutExitPage=http://m.rzd.ru&token=${token}`)
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
          if (res.authFlag) {
            throw new Error(`Не удалось завершить сессию авторизации`)
          }
          dispatch(requestLogoutSuccess())
          history.push("/login")
        }
      )
      .catch (
        err => { 
          dispatch(requestLogoutError(err)) 
        }
      )
  }
};

/*eslint-disable */
export function fetchLogin(login, password, history) {
  return (dispatch) => {
    dispatch(requestLogin());

    fetch(`https://rzd-proxy.herokuapp.com/selfcare/j_security_check/ru?j_username=${login}&j_password=${password}`)
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

          if (!res.authFlag) {
            throw new Error(`Неверный логин или пароль`)
          }

          var lToken = res.token

          fetch(`https://rzd-proxy.herokuapp.com/selfcare/user?token=${lToken}`)
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
                  localStorage.setItem('cks_token', JSON.stringify({ token: lToken, userInfo: userInfo.data }))
                  history.push("/")
                }
            )
        }
      )
      .catch (
        err => { 
          localStorage.clear()
          dispatch(requestLoginError(err)) 
        }
      )
  }
};
/*eslint-enable */
