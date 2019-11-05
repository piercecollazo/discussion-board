import { AUTH_USER_SUCCESSFUL, AUTH_USER_SIGN_IN, AUTH_USER_LOGOUT } from '../actionTypes/actionTypes';
import Axios from '../../lib/Axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../lib/setAuthToken'

export const signup = (userInfo) => async dispatch => {
    try {
        let success = await Axios.post('/users/sign-up', userInfo);
        dispatch(authUserSuccessful(success.data.message))
        return Promise.resolve(success.data.message);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const signin = (userInfo) => async dispatch => {
    try {
        let success = await Axios.post('/users/sign-in', userInfo);
        const { token } = success.data;
        setAuthToken(token)
        localStorage.setItem('jwtToken', token)
        const decoded = jwt_decode(token)
        console.log(decoded)
        dispatch(authUserSignIn(decoded, token))
        return Promise.resolve(decoded);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const authUserSuccessful = (message) => dispatch => {
    dispatch({
        type: AUTH_USER_SUCCESSFUL,
        payload: message
    })
}


export const authUserSignIn = (decoded, token) => dispatch => {
    dispatch({
        type: AUTH_USER_SIGN_IN,
        payload: decoded,
        token: token
    })
}

export const handleLogout = ()=> dispatch => {
    dispatch({
        type: AUTH_USER_LOGOUT
    })
}
