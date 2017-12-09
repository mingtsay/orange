/**
 * Import Dependency
 */
import { combineReducers } from 'redux';
import { locales } from './locales';
import { posts } from './posts';
import { indicator } from './indicator';

/**
 * Export
 */
export default combineReducers({
	locales,
	posts,
	indicator
})
