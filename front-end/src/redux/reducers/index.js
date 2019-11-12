import { combineReducers } from 'redux';
import authReducer from './authReducer';
import handleMessageReducer from  './handleMessageReducer';
import forumReducer from './forumReducer'

export default combineReducers({
    authUser: authReducer,
    handleMessage: handleMessageReducer,
    forumData: forumReducer
});