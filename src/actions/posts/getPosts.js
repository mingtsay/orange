/**
 * Import Dependency
 */
import { createAction } from 'redux-actions';
import {
	GET_POSTS,
	INDICATOR_ENABLE
} from '../../constants/actionTypes';
import jsonPlaceholderAPI from '../../services/api/jsonplaceholder/posts';

/**
 * Declare Variable
 */
const getPosts = createAction(GET_POSTS);
const indicatorEnable = createAction(INDICATOR_ENABLE);

/**
 * Export
 */
export const itemsFetchData = (params, type) => async (dispatch) => {
	dispatch(indicatorEnable(true));
	try {
		const response = await jsonPlaceholderAPI.getAllPosts();
		dispatch(getPosts(response));
		dispatch(indicatorEnable(false));
	} catch (e) {
		console.log(e);
	}
}
