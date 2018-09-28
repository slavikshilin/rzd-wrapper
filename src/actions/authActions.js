import { getLogin, getLogout, getUserInfo } from "../core/api/apiMethods";

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

    getLogout(token)
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
          history.push("/login")
        }
      )
  }
};

/*eslint-disable */
export function fetchLogin(login, password, history) {
  return (dispatch) => {
    dispatch(requestLogin());

    getLogin(login, password)
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

          getUserInfo(lToken)
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
