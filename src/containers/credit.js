/**
 * Import Dependency
 */
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/**
 * Import Component
 */
import Credit from '../components/credit'

/**
 * Declare Variable
 */
const mapStateToProps = state => {
	return {}
};
const mapDispatchToProps = dispatch => {
	return {}
};

/**
 * Export
 */
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Credit))
