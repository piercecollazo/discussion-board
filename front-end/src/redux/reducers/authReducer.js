import { AUTH_USER_SIGN_IN, AUTH_USER_LOGOUT} from '../actionTypes/actionTypes';
import { jwtDecodeTokenAndSetUser} from './authReducerHelper';

const initialState = {
    isAuthenticated: false, 
    user: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTH_USER_SIGN_IN:
            return jwtDecodeTokenAndSetUser(state, action.token)

        case AUTH_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: null
            }
            
        

        default: 
            return state;
    }
}