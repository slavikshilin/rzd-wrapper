import { getCars } from '../core/api/apiMethods'

export const REQUEST_CARS = 'REQUEST_CARS'
export const REQUEST_CARS_SUCCESS = 'REQUEST_CARS_SUCCESS'
export const REQUEST_CARS_FAILED = 'REQUEST_CARS_FAILED'
export const REQUEST_CARS_CLEAR = 'REQUEST_CARS_CLEAR'

function requestCarList(tnum, id) {
    return {
        type: REQUEST_CARS,
        payload: {
            tnum,
            id
        }
    }
}

function requestCarListSuccess(carsInfo) {
    return {
        type: REQUEST_CARS_SUCCESS,
        payload: carsInfo
    }
}

function requestCarListError(err) {
    return {
        type: REQUEST_CARS_FAILED,
        payload: err
    }
}

export function clearCars() {
    return {
        type: REQUEST_CARS_CLEAR
    }
}

export function fetchCars(fromCode, toCode, date, tnum, id, history, rid) {
    return (dispatch) => {
        dispatch(requestCarList(tnum, id))

        getCars(fromCode, toCode, date, tnum, rid)
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
                    if (!res.data) {
                        throw new Error(`Не удалось получить список вагонов`)
                    } else if (res.data.result === 'RID') {
                        dispatch(fetchCars(fromCode, toCode, date, tnum, id, history, res.data.RID))
                    } else if (res.data.error) {
                        throw new Error(res.data.error)
                    } else if ((res.data.lst) && (res.data.lst.length > 0) && (res.data.lst[0].result === 'FAIL')) {
                        throw new Error(res.data.lst[0].error)
                    } else {
                        dispatch(requestCarListSuccess(res.data.lst))
                        history.push("/cars")
                    }
                }
            )
            .catch(
                err => {
                    dispatch(requestCarListError(err))
                }
            )
    }
}