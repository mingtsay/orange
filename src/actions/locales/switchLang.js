/**
 * Import Dependency
 */
import store from '../../store';
import { createAction } from 'redux-actions';
import {
	SWITCH_LANG
} from '../../constants/actionTypes';

/**
 * Declare Variable
 */
const switchLang = createAction(SWITCH_LANG);

/**
 * Export
 */
export const switchLocale = (params, type) => async (dispatch) => {
	try {
		const lang = params || 'en';
		dispatch(switchLang(lang));
	} catch (e) {
		console.log(e);
	}
}
