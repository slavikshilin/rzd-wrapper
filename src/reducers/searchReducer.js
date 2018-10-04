import { CHANGE_DEPARTURE_STATION, CHANGE_ARRIVE_STATION, CHANGE_DEPARTURE_DATE, CLEAR_SEARCH } from '../actions/searchActions'

const initialState = {
    fromStation: null,
    toStation: null,
    date: null
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_DEPARTURE_STATION:
            {
                let newState = { ...state, fromStation: action.payload }
                return newState
            }

        case CHANGE_ARRIVE_STATION:
            {
                let newState = { ...state, toStation: action.payload }
                return newState
            }

            case CHANGE_DEPARTURE_DATE:
            {
                let newState = { ...state, date: action.payload }
                return newState
            }       
            
            case CLEAR_SEARCH:
            {
                let newState = { ...initialState }
                return newState
            }              

        default:
            return state
    }
}