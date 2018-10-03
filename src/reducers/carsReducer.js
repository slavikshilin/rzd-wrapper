import { REQUEST_CARS, REQUEST_CARS_SUCCESS, REQUEST_CARS_FAILED, REQUEST_CARS_CLEAR } from '../actions/carsActions'

const initialState = {
    carsInfo: null,
    err: null,
    isFetching: false,
    tnum: null,
    id: null
}

export function carsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_CARS:
            {
                let newState = { ...state, carsInfo: null, err: null, isFetching: true, tnum: action.payload.tnum, id: action.payload.id }
                return newState
            }

        case REQUEST_CARS_SUCCESS:
            {
                let newState = { ...state, carsInfo: action.payload, err: null, isFetching: false, tnum: null, id: null }
                return newState
            }

        case REQUEST_CARS_FAILED:
            {
                let newState = { ...state, carsInfo: null, err: action.payload, isFetching: false, tnum: null, id: null }
                return newState
            }

        case REQUEST_CARS_CLEAR:
            {
                let newState = { ...initialState }
                return newState
            }

        default:
            return state
    }
}