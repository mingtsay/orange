/**
 * Import Dependency
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/**
 * Import Action
 */
 import * as getPostsAction from '../actions/posts/getPosts.js'

/**
 * Import Component
 */
import Signin from '../components/signin'

/**
 * Declare Variable
 */
const mapStateToProps = state => {
	return {

	}
};
const mapDispatchToProps = dispatch => {
	return {

	}
};

/**
 * Export
 */
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Signin))
