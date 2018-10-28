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

const userProfile = (prev = {}, action) => {
    switch(action.type) {
        case "VERIFY":
            return localStorage.getItem("user");
        case "LOGIN_SUCCESSFUL":
            return action.data.user;
        case "LOGOUT_SUCCESSFUL":
            return {};
        default:
            return prev;
    }
}

const loadEvents = (prev = [], action) => {
    switch(action.type) {
        case "LOAD_EVENTS":
            return action.data;
        case "EVENT_ADDED":
            return [...prev, action.data];
        case "EVENT_DELETED":
            return prev.filter(event => event._id !== action.id);
        case "EVENT_UPDATED":
            return prev.map(event => {
                if(event._id === action.data._id) return action.data;
                return event;
            });
        default:
            return prev;
    }
};

const selectedEvent = (prev = null, action) => {
    switch(action.type) {
        case "EVENT_SELECTED":
            return action.data;
        default:
            return prev
    }
}

const reducer = combineReducers({
    isAuthenticated,
    token,
    userProfile,
    loadEvents,
    selectedEvent
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));