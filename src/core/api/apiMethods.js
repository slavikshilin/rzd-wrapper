const HOST_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:4000' : 'https://rzd-proxy.herokuapp.com'

function getToken() {
	const token = (localStorage.getItem('cks_token')) ? JSON.parse(localStorage.getItem('cks_token')).token : null	
	return token
}

/**
 * Автокомплит станций
 * @param {string} station Имя или код станции
 * @returns {Promise<Array<StationResponseItem>>}
 */
export function getStations(station) {
	let urlEncodedStation = encodeURIComponent(station);
	return fetch(`${HOST_URL}/suggester?stationNamePart=${urlEncodedStation}&compactMode=y&lat=1&lang=ru`);
}

/**
 * Справка TrainList
 * @param {string} fromCode
 * @param {string} toCode
 * @param {string} date
 * @returns {Promise<Array<TrainsInformation>>}
 */ 
export function getTrains(fromCode, toCode, date, rid) {

	const baseUrl = `${HOST_URL}/timetable/public/ru?layer_id=5827&checkSeats=1&code0=${fromCode}&code1=${toCode}&dir=0&dt0=${date}&tfl=3&token=${getToken()}`

	const url = rid ? `${baseUrl}&rid=${rid}` : baseUrl
	return fetch(url)
}
