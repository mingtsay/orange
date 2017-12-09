/**
 * Import Dependency
 */
import axios from '../../interceptor';
import { baseUrl, routes } from '../config';

/**
 * Export
 */
export default {
	getAllPosts() {
		return axios.get(`${baseUrl}${routes.posts}`)
	}
}
