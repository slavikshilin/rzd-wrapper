import { getLogin, getLogout, getUserInfo } from '../core/api/apiMethods'
import { getToken, clearLocalStorage, setLocalStorage } from '../core/utils/userInfo'

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

        const token = getToken()
        clearLocalStorage()
        dispatch(requestLogout())

        getLogout(token)
            .then(
                function (res) {
                    if (res.ok) {
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
            .catch(
                err => {
                    dispatch(requestLogoutError(err))
                    history.push("/login")
                }
            )
    }
}

/*eslint-disable */
export function fetchLogin(login, password, history) {
    return async (dispatch) => {
        dispatch(requestLogin())

        try {
            let resPromise = await getLogin(login, password);
            let res = await resPromise.json();

            if (!res.authFlag) {
                throw new Error(`Неверный логин или пароль`)
            }

            var lToken = res.token

            let userInfoPromise = await getUserInfo(lToken);
            let userInfo = await userInfoPromise.json();
            dispatch(requestLoginSuccess(userInfo.data))
            //сохранение токена в localStorage
            setLocalStorage(lToken, userInfo.data)
            history.push("/")

        } catch(err) {
            localStorage.clear()
            dispatch(requestLoginError(err))
        }

    }
}
/*eslint-enable */
