export const CHANGE_DEPARTURE_STATION = 'CHANGE_DEPARTURE_STATION'
export const CHANGE_ARRIVE_STATION = 'CHANGE_ARRIVE_STATION'
export const CHANGE_DEPARTURE_DATE = 'CHANGE_DEPARTURE_DATE'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export function changeDepartureStation(station) {
    return {
        type: CHANGE_DEPARTURE_STATION,
        payload: station
    }
}

export function changeArriveStation(station) {
    return {
        type: CHANGE_ARRIVE_STATION,
        payload: station
    }
}

export function changeDepartureDate(date) {
    return {
        type: CHANGE_DEPARTURE_DATE,
        payload: date
    }
}

export function clearSearch() {
    return {
        type: CLEAR_SEARCH
    }
}