/**
 * Import Dependency
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getPostActions from '../actions/posts/getPosts';
import { withRouter } from 'react-router';

/**
 * Import Component
 */
import Welcome from '../components/welcome';

/**
 * Declare Variable
 */
const mapStateToProps = (state) => {
	return {
		items: state.posts,
		indicator: state.indicator
	};
};

const mapDispatchToProps = (dispatch) => {
	const { itemsFetchData } = bindActionCreators(getPostActions, dispatch);
	return {
		itemsFetchData
	};
};

/**
 * Export
 */
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome))
