import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { accountReducer } from './account/accountReducer';
import { filmReducer } from './film/filmReducer';
import { parentReducer } from './parent/parentReducer';
import { showTimeReducer } from './showTimes/showTimeReducer';
import { userReducer } from './user/userReducer';
import { IUserState } from './user/userTypes';

const rootState = {
    filmStore: filmReducer,
    accountStore: accountReducer,
    userStore: userReducer,
    parentStore: parentReducer,
    showTimeStore: showTimeReducer,
};
const rootReducer = combineReducers(rootState);

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
