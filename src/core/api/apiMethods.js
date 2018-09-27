const HOST_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:4000' : 'https://rzd-proxy.herokuapp.com'

/**
 * Автокомплит станций
 * @param {string} station Имя или код станции
 * @returns {Promise<Array<StationResponseItem>>}
 */
export function getStations(station) {
	let urlEncodedStation = encodeURIComponent(station);
	return fetch(`${HOST_URL}/suggester?stationNamePart=${urlEncodedStation}&compactMode=y&lat=1&lang=ru`);
}
