export const CHANGE_DEPARTURE_STATION = 'CHANGE_DEPARTURE_STATION'
export const CHANGE_ARRIVE_STATION = 'CHANGE_ARRIVE_STATION'
export const CHANGE_DEPARTURE_DATE = 'CHANGE_DEPARTURE_DATE'

export function changeDepartureStation(code) {
    return {
        type: CHANGE_DEPARTURE_STATION,
        payload: code
    }
}

export function changeArriveStation(code) {
    return {
        type: CHANGE_ARRIVE_STATION,
        payload: code
    }
}

export function changeDepartureDate(date) {
    return {
        type: CHANGE_DEPARTURE_DATE,
        payload: date
    }
}