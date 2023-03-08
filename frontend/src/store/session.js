import csrfFetch from './csrf';

export const SET_CURRENT_USER = 'session/setCurrentUser';
export const REMOVE_CURRENT_USER = 'session/removeCurrentUser';
export const RECEIVE_CURRENT_USER_REVIEWS = 'session/getCurrentUserReviews';

//actions

const setCurrentUser = (user) => (
    {
        type: SET_CURRENT_USER,
        payload: user
    }
);

const removeCurrentUser = () => (
    {
        type: REMOVE_CURRENT_USER
    }
);

const getCurrentUserReviews = (payload) => (
    {
        type: RECEIVE_CURRENT_USER_REVIEWS,
        payload
    }
);

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}


//THUNK action creators

export const fetchCurrentUserReviews = () => async dispatch => {
    const response = await csrfFetch("/api/session")
    const data = await response.json();
    dispatch(getCurrentUserReviews(data))
}

export const login = ({ email, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ email, password })
        });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
};


export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
};

export const signup = ({first_name, last_name, email, password}) => async dispatch => {
    const response = await csrfFetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password
        })
    });

    console.log(response.ok, "This is checking")
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch("/api/session", {
        method: "DELETE"
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return response;
};


const initialState = {
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};


//state reducer
const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload }
        case REMOVE_CURRENT_USER:
            return { ...state, user: null }
        default:
            return state
    }
}

export default sessionReducer;
