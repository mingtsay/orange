/**
 * Global Style
 */
import './index.css';

/**
 * Import Dependency
 */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import RouterProvider from './routers';
import store from './store';
import ConnectedIntlProvider from './connectedIntlProvider';
import { createAction } from 'redux-actions';
import {
	SWITCH_LANG
} from './constants/actionTypes';

/**
 * Declare Variable
 */
const switchLang = createAction(SWITCH_LANG);
const _localStorage = JSON.parse(localStorage.getItem('state'));
const lang = (_localStorage ? _localStorage.locales : 'en');
const root = document.getElementById("root");
const Ele = () => (
	<Provider store={ store }>
		<ConnectedIntlProvider>
			<RouterProvider />
		</ConnectedIntlProvider>
	</Provider>
);

/**
 * Store Dispatch on App Init
 */
store.dispatch(switchLang(lang));

/**
 * Render
 */
ReactDOM.render(<Ele />, root);

/**
 * Global Config
 */
injectTapEventPlugin();
registerServiceWorker();
