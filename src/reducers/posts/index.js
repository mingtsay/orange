/**
 * Import Dependency
 */
import { handleActions } from 'redux-actions';

/**
 * Declare Variable
 */
const defaultState = [];

/**
 * Export
 */
export const posts = handleActions({
	GET_POSTS: (state, action) => action.payload.data
}, defaultState);

export default {
	posts
}
