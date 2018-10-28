import axios from 'axios';

let authAxios = axios.create();

authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const init = dispatch => {
    dispatch({
        type: "INIT"
    });
};

export const verify = () => {
    return dispatch => {
        if(localStorage.getItem("token")){
            init(dispatch);
            dispatch({ type:"VERIFY" });
        };
    };
};

export const login = ({ username, password }) => {
    if(!username || !password) 
        return {
            type: "AUTH_ERROR",
            data: "Username and password required."
        };
    return dispatch => {
        axios.post("/auth/login", { username, password})
            .then(res => {
                dispatch({
                    type: "LOGIN_SUCCESSFUL",
                    data: res.data
                });
            })
            .then(init(dispatch))
            .catch(err => console.log(err));
    };
};

export const signup = ({ username, password }) => {
    if(!username || !password) {
        return {
            type: "SIGNUP_ERROR",
            data: "Username and password required."
        };
    };
    return dispatch => {
        axios.post("/auth/signup", { username, password })
            .then(res => {
                init(dispatch);
                dispatch({
                    type: "LOGIN_SUCCESSFUL",
                    data: res.data
                });
            })
            .catch(err => console.log(err));
    };
};

export const logout = () => {
    return {
        type: "LOGOUT_SUCCESSFUL"
    };
};

export const loadEvents = () => {
    return dispatch => {
        axios.get('/events')
            .then(res => {
                dispatch({
                    type: "LOAD_EVENTS",
                    data: res.data
                });
            })
            .catch(err => console.log(err));
    };
};

export const selectedEvent = id => {
    return dispatch => 
        axios.get(`/events/${id}`)
            .then(res => 
                dispatch({
                    type: "EVENT_SELECTED",
                    data: res.data
                }))
            .catch(err => console.log(err))
};

export const addEvent = obj => {
    return dispatch => 
        authAxios.post("/api/events", obj)
            .then(res => 
                dispatch({
                    type: "EVENT_ADDED",
                    data: res.data
                }))
            .catch(err => console.log(err));
};

export const deleteEvent = id => {
    return dispatch => 
        authAxios.delete(`/api/events/${id}`)
            .then(res => 
                dispatch({
                    type: "EVENT_DELETED",
                    id
                }))
            .catch(err => console.log(err));
};

export const editEvent = (id, obj) => {
    return dispatch => 
        authAxios.put(`/api/events/${id}`, obj)
            .then(res => 
                dispatch({
                    type: "EVENT_UPDATED",
                    data: res.data
                }))
            .catch(err => console.log(err));
};

