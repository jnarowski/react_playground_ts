import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = (initialState = {}) => {
	return createStore(
		reducers,
		applyMiddleware(thunk)
	);
}

const store = configureStore({})
const dispatch = store.dispatch

export default store

export { dispatch }
