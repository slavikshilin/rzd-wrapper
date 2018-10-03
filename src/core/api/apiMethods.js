const HOST_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:4000' : 'https://rzd-wrapper-backend-veyrmmspzr.now.sh'

function getToken() {
	const token = (localStorage.getItem('cks_token')) ? JSON.parse(localStorage.getItem('cks_token')).token : null	
	return token
}

/**
 * Авторизация пользователя
 * @param {string} user Имя пользователя
 * @param {string} password Пароль пользователя
 * @returns {Promise<Array<Object>>}
 */
export function getLogin(user, password) {
	let urlEncodedUser = encodeURIComponent(user)
	let urlEncodedPassword = encodeURIComponent(password)
	return fetch(`${HOST_URL}/selfcare/j_security_check/ru?j_username=${urlEncodedUser}&j_password=${urlEncodedPassword}`)
}

/**
 * Выход авторизованного пользователя
 * @param {string} token токен авторизованного пользователя
 * @returns {Promise<Object>}
 */
export function getLogout(token) {
	return fetch(`${HOST_URL}/selfcare/ibm_security_logout?logoutExitPage=http://m.rzd.ru&token=${token}`)
}

/**
 * Получение данных авторизованного пользователя
 * @param {string} token токен авторизованного пользователя
 * @returns {Promise<Object>}
 */
export function getUserInfo(token) {
	return fetch(`${HOST_URL}/selfcare/user?token=${token}`)
}

/**
 * Автокомплит станций
 * @param {string} station Имя или код станции
 * @returns {Promise<Array<StationResponseItem>>}
 */
export function getStations(station) {
	let urlEncodedStation = encodeURIComponent(station)
	return fetch(`${HOST_URL}/suggester?stationNamePart=${urlEncodedStation}&compactMode=y&lat=1&lang=ru`)
}

/**
 * Справка по поездам
 * @param {string} fromCode
 * @param {string} toCode
 * @param {string} date
 * @param {string} rid
 * @returns {Promise<Array<TrainsInformation>>}
 */ 
export function getTrains(fromCode, toCode, date, rid) {
	const baseUrl = `${HOST_URL}/timetable/public/ru?layer_id=5827&checkSeats=1&code0=${fromCode}&code1=${toCode}&dir=0&dt0=${date}&tfl=3&token=${getToken()}`
	const url = rid ? `${baseUrl}&rid=${rid}` : baseUrl
	return fetch(url)
}

/**
 * Справка по вагонам
 * @param {string} fromCode
 * @param {string} toCode
 * @param {string} date
 * @param {string} tnum
 * @param {string} rid
 * @returns {Promise<Array<CarsInformation>>}
 */ 
export function getCars(fromCode, toCode, date, tnum, rid) {
	const baseUrl = `${HOST_URL}/timetable/public/ru?layer_id=5764&code0=${fromCode}&code1=${toCode}&dir=0&dt0=${date}&tnum0=${tnum}&token=${getToken()}`
	const url = rid ? `${baseUrl}&rid=${rid}` : baseUrl
	return fetch(url)
}
