import log from 'ololog'
const _error = (method, err) => {
	log.lightYellow(`${method} ERROR:`, err.message)
}

export default _error