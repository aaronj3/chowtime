import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import restaurantsReducer from './restaurants';
import reviewReducer from './reviews';

const rootReducer = combineReducers({
        session,
        restaurants: restaurantsReducer,
        reviews: reviewReducer
    });

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

function configureStore(preloadedState = {}) {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;
