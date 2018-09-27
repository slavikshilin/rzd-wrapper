import { getTrains } from "../core/api/apiMethods";

export const REQUEST_TRAINS = 'REQUEST_TRAINS'
export const REQUEST_TRAINS_SUCCESS = 'REQUEST_TRAINS_SUCCESS'
export const REQUEST_TRAINS_FAILED = 'REQUEST_TRAINS_FAILED'

function requestTrainList() {
  return {
    type: REQUEST_TRAINS
  }
}

function requestTrainListSuccess(trainsInfo) {
  return {
    type: REQUEST_TRAINS_SUCCESS,
    payload: trainsInfo
  }
}

function requestTrainListError(err) {
  return {
    type: REQUEST_TRAINS_FAILED,
    payload: err
  }
}

export function fetchTrains(fromCode, toCode, date, rid) {
  return (dispatch) => {
    dispatch(requestTrainList());

    getTrains(fromCode, toCode, date, rid)
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
          if (!res.data) {
            throw new Error(`Не удалось получить список поездов`)
          } else if (res.data.result === 'RID') {
            dispatch(fetchTrains(fromCode, toCode, date, res.data.RID))
          } else if ((res.data.error) || ((res.data.result) && (res.data.result.FAIL))) {
            throw new Error(res.data.error)
          } else {
            dispatch(requestTrainListSuccess(res.data.tp));
          }
        }
      )
      .catch(
        err => {
          dispatch(requestTrainListError(err));
        }
      )

  }
};