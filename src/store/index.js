import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

const store = configureStore({})
const dispatch = store.dispatch

export default store

export { dispatch }
