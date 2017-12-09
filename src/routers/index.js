/**
 * Import Dependency
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Import Container
 */
import Root from '../containers/root';

/**
 * Declare Variable
 */
const RouterModule = () => (
	<BrowserRouter>
		<Switch>
			<Route
				exact
				path={ '/' }
				component={ Root }
			/>
			<Route
				path={ '/root' }
				component={ Root }
			/>
			<Route
				render={ () => <p>404</p> }
			/>
		</Switch>
	</BrowserRouter>
)

/**
 * Export
 */
export default RouterModule
