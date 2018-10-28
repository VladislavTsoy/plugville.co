import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const isAuthenticated = (prev = false, action) => {
    switch(action.type) {
        case "VERIFY":
            return true;
        case "LOGIN_SUCCESSFUL":
            return true;
        case "LOGOUT_SUCCESFUL":
            return false;
        default:
            return prev;
    }
};

const token = (prev = null, action) => {
    switch(action.type) {
        case "VERIFY":
            return localStorage.getItem("token");
        case "LOGIN_SUCCESSFUL":
            localStorage.setItem("token", action.data.token);
            localStorage.setItem("id", action.data.user._id);
            return action.data.token;
        case "LOGOUT_SUCCESSFUL":
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            return "";
        default:
            return prev;
    }
};

const reducer = combineReducers({
    isAuthenticated,
    token
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));