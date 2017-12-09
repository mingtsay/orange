/**
 * Import Dependency
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as switchLangAction from '../actions/locales/switchLang';

/**
 * Import Component
 */
import Root from '../components/root'

/**
 * Declare Variable
 */
const mapStateToProps = (state) => {
	return {
		lang: state.locales
	}
};
const mapDispatchToProps = (dispatch) => {
	const { switchLocale } = bindActionCreators(switchLangAction, dispatch);
	return {
		switchLocale
	};
};

/**
 * Export
 */
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Root))
