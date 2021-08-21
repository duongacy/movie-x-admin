import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { filmReducer } from './film/filmReducer';
import { theatreReducer } from './theatre/theatreReducer';

export type IRootState = {
    filmStore: any;
    theatreStore: any;
};
const rootState: IRootState = {
    filmStore: filmReducer,
    theatreStore: theatreReducer,
};
const rootReducer = combineReducers(rootState);

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
