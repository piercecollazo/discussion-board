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
                topics: action.payload
            }
            
        case POST_LIST_FILL:
            return{
                ...state,
                posts: action.payload
            }

        case CATEGORY_LIST_FILL:
            return{
                ...state,
                categories: action.payload
            }

        case CREATE_POST:
            let newPost = [...state.posts, action.payload]
            return{
                ...state,
                posts: newPost

            }
        
        case CREATE_TOPIC:
            let newTopic = [...state.topics, action.payload]
            return{
                ...state,
                topics: newTopic
            }

        default:
            return state;
    }
}