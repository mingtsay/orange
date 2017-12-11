/**
 * Import Dependency
 */
import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

/**
 * Import Container
 */
import Signin from '../../containers/signin';
import Credit from '../../containers/credit';
import Welcome from '../../containers/welcome';

/**
 * Import Asset
 */
import './index.scss';
import './test.scss'; // For test mixins only
import logo from '../../assets/img/logo.svg';

/**
 * Component
 */
class Root extends Component {
	constructor(props) {
		super(props);
		this.switchI18n = this.switchI18n.bind(this);
	}

	componentWillMount() {
		console.log('componentWillMount');
		// this.props.switchLocale();
	}

	switchI18n() {
		let lang = (this.props.lang === 'en' ? 'zh' : 'en');
		this.props.switchLocale(lang);
	}

	render() {

		let lang = (this.props.lang === 'en' ? 'zh' : 'en');

		return (
			<div className="App">
				<div className="App-header">
					<div>
						<img src={ logo } className="App-logo" alt="logo" />
					</div>
					<div className="slogan">
						<FormattedMessage
							id="slogan"
							defaultMessage="Practice Use Only"
						/>
					</div>
					<div className="App-lang" onClick={ this.switchI18n }>
						{ lang === 'en' ? (
							<div>En</div>
						) : (
							<div>繁</div>
						)}
					</div>
				</div>
				<div className="navBar">
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/root/signin">Sign In</NavLink></li>
						<li><NavLink to="/root/credit">Credit</NavLink></li>
					</ul>
				</div>
				<div className="content">
					<Switch>
						<Route
							exact
							path={ '/' }
							component={ Welcome }
						/>
						<Route
							exact
							path={ '/root' }
							component={ Welcome }
						/>
						<Route
							path={ '/root/signin' }
							component={ Signin }
						/>
						<Route
							path={ '/root/credit' }
							component={ Credit }
						/>
						<Route
							component={ () => <p>Error 404</p> }
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

/**
 * Export
 */
export default Root;
