import { getCars } from '../core/api/apiMethods'

export const REQUEST_CARS = 'REQUEST_CARS'
export const REQUEST_CARS_SUCCESS = 'REQUEST_CARS_SUCCESS'
export const REQUEST_CARS_FAILED = 'REQUEST_CARS_FAILED'
export const REQUEST_CARS_CLEAR = 'REQUEST_CARS_CLEAR'

function requestCarList(tnum, id, carType) {
    return {
        type: REQUEST_CARS,
        payload: {
            tnum,
            id,
            carType
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

export function fetchCars(fromCode, toCode, date, tnum, id, carType, history, rid) {
    return async (dispatch) => {
        dispatch(requestCarList(tnum, id, carType))

        try {
            let resPromise = await getCars(fromCode, toCode, date, tnum, rid);
            let res = await resPromise.json();
            if (!res.data) {
                throw new Error(`Не удалось получить список вагонов`)
            } else if (res.data.result === 'RID') {
                dispatch(fetchCars(fromCode, toCode, date, tnum, id, carType, history, res.data.RID))
            } else if (res.data.error) {
                throw new Error(res.data.error)
            } else if ((res.data.lst) && (res.data.lst.length > 0) && (res.data.lst[0].result === 'FAIL')) {
                throw new Error(res.data.lst[0].error)
            } else {
                dispatch(requestCarListSuccess(res.data.lst))
                history.push("/cars")
            }           
            
        } catch(err) {
            dispatch(requestCarListError(err))
        }

    }
}