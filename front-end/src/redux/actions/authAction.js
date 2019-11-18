import { AUTH_USER_SUCCESSFUL, AUTH_USER_SIGN_IN, AUTH_USER_LOGOUT, CATEGORY_LIST_FILL, TOPIC_LIST_FILL, POST_LIST_FILL, CREATE_TOPIC, CREATE_POST } from '../actionTypes/actionTypes';
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

export const categoryList = ()=> async dispatch => {
    try{
        let success = await Axios.get('/discussion/get-all-category')
        dispatch({
            type: CATEGORY_LIST_FILL,
            payload: success
        })
    }catch (error){
        return Promise.reject(error);
    }
}

export const topicList = (categoryId)=> async dispatch => {
    try{
        let success = await Axios.get(`/discussion/get-all-topics/${categoryId}`)
        dispatch({
            type: TOPIC_LIST_FILL,
            payload: success.data.topics
        })
        return Promise.resolve()
    }catch (error){
        return Promise.reject(error);
    }
}

export const createTopic = (categoryId, userId, name, post) => async dispatch => {
    try {
        let success = await Axios.post(`/discussion/create-topic/${categoryId}/${userId}`, {title: name, content: post})
        dispatch({
            type: CREATE_TOPIC,
            payload: success
        })
    } catch(error){
        return Promise.reject(error);
    }
}

export const createPost = (topicId, userId, post) => async dispatch => {
    try {
        let success = await Axios.post(`/discussion/create-post/${topicId}/${userId}`, {content: post})
        dispatch({
            type: CREATE_POST,
            payload: success.data.post
        })
    } catch(error){
        return Promise.reject(error);
    }
}

export const postList = (topicId)=> async dispatch => {
    try{
        let success = await Axios.get(`/discussion/get-all-posts/${topicId}`)
        console.log(success.data)
        dispatch({
            type: POST_LIST_FILL,
            payload: success.data.post
        })
    }catch (error){
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
