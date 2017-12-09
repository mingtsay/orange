/**
 * Import Dependency
 */
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import zh_CN from './locales/zh_CN.js';
import en_US from './locales/en_US.js';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

/**
 * Config
 */
 addLocaleData([
 	...en,
 	...zh
 ]);
function mapStateToProps(state) {
	let _localStorage = JSON.parse(localStorage.getItem('state'));
	let lang = (state.locales ? state.locales : _localStorage.locales);
	let messages = (lang === 'en' ? en_US : zh_CN);
	return {
		locale: lang,
		messages
	};
}

/**
 * Export
 */
export default connect(mapStateToProps)(IntlProvider);
