import { getCars } from "../core/api/apiMethods";

export const REQUEST_CARS = 'REQUEST_CARS'
export const REQUEST_CARS_SUCCESS = 'REQUEST_CARS_SUCCESS'
export const REQUEST_CARS_FAILED = 'REQUEST_CARS_FAILED'
export const REQUEST_CARS_CLEAR = 'REQUEST_CARS_CLEAR'

function requestCarList() {
  return {
    type: REQUEST_CARS
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

export  function clearCars() {
  return {
    type: REQUEST_CARS_CLEAR
  }
}

export function fetchCars(fromCode, toCode, date, tnum, history, rid) {
  return (dispatch) => {
    dispatch(requestCarList());

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
            dispatch(fetchCars(fromCode, toCode, date, tnum, history, res.data.RID))
          } else if ((res.data.error) || ((res.data.result) && (res.data.result.FAIL))) {
            throw new Error(res.data.error)
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
};