import {TOPIC_LIST_FILL, POST_LIST_FILL, CATEGORY_LIST_FILL, CREATE_POST, CREATE_TOPIC} from '../actionTypes/actionTypes'

const initialState = {
    categories: [],
    topics: [],
    posts: []
}

export default function(state= initialState, action){
    switch(action.type){

        case TOPIC_LIST_FILL:
            return{
                ...state,
            }
            
        case POST_LIST_FILL:
            return{
                ...state,
            }

        case CATEGORY_LIST_FILL:
            return{
                ...state,
            }

        case CREATE_POST:
            return{
                ...state,
            }
        
        case CREATE_TOPIC:
            return{
                ...state,
            }

        default:
            return state;
    }
}