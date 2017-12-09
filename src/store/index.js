/**
 * Import Dependency
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import { loadState, saveState } from '../middlewares/localStorage';

/**
 * Declare Variable
 */
const persistedState = loadState();
const middleware = [
	thunk,
	promise(),
	logger
];
const store = createStore(
	rootReducer,
	// persistedState,
	composeWithDevTools(applyMiddleware(...middleware))
);

/**
 * Config
 */
store.subscribe(() => {
	saveState({
		locales: store.getState().locales
	});
});

/**
 * Export
 */
export default store
