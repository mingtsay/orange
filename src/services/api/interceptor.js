/**
 * Import Dependency
 */
import axios from 'axios';

/**
 * Config
 */
axios.defaults.timeout = 5000;
axios.interceptors.request.use(config => {
	return config
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
});
axios.interceptors.response.use(data => {
	return data
}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
});

export default axios
