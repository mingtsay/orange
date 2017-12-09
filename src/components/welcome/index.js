/**
 * Import Dependency
 */
import React, { Component } from 'react';

/**
 * Import Asset
 */
import './index.css';

/**
 * Component
 */
class Welcome extends Component {
	constructor(props) {
		super(props);
		this.getData = this.getData.bind(this);
	}

	getData(e){
		this.props.itemsFetchData('Hello World');
	}

	render() {

		const listItems = this.props.items.map((numbers, i) =>
			<li key={i}>{numbers.title}</li>
		);

		const indicator = this.props.indicator;

		if (indicator) {
			return (
				<div>Loading...</div>
			)
		}

		return (
			<div>
				<button onClick={ this.getData }>Get Data from JsonPlaceholder</button>
				<div>{ listItems }</div>
			</div>
		)

	}
}

// Welcome.propTypes = {
// 	fetchData: PropTypes.func.isRequired,
// };

/**
 * Export
 */
export default Welcome;
