import { CHANGE_DEPARTURE_STATION, CHANGE_ARRIVE_STATION, CHANGE_DEPARTURE_DATE } from '../actions/searchActions'

const initialState = {
    fromCode: null,
    toCode: null,
    date: null
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_DEPARTURE_STATION:
            {
                let newState = { ...state, fromCode: action.payload }
                return newState
            }

        case CHANGE_ARRIVE_STATION:
            {
                let newState = { ...state, toCode: action.payload }
                return newState
            }

            case CHANGE_DEPARTURE_DATE:
            {
                let newState = { ...state, date: action.payload }
                return newState
            }            

        default:
            return state
    }
}