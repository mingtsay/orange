/**
 * Import Dependency
 */
import { handleActions } from 'redux-actions';

/**
 * Declare Variable
 */
const defaultState = '';

/**
 * Export
 */
export const locales = handleActions({
	SWITCH_LANG: (state, action) => action.payload
}, defaultState);

export default {
	locales
}
