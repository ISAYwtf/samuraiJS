import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getMe = () => async dispatch => {
    const data = await authAPI.getMe();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(getMe());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Email or password are incorrect.";
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = () => async dispatch => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;