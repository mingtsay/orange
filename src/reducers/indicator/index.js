/**
 * Import Dependency
 */
import { handleActions } from 'redux-actions';

/**
 * Declare Variable
 */
const defaultState = false;

/**
 * Export
 */
export const indicator = handleActions({
	INDICATOR_ENABLE: (state, action) => action.payload
}, defaultState);

export default {
	indicator
}
