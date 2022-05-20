import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_USER, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

const users = (state = { isLoading: true, users: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING: 
            return { ...state, isLoading: false }
        case FETCH_ALL:
            return { ...state, users: action.payload }
        case FETCH_USER:
            return { ...state, user: action.payload }
        case CREATE:
            return { ...state, users :[...state.users, action.payload] }
        case UPDATE:
            return { ...state, users :state.users.map((user) => user.id === action.payload.id ? action.payload : user) }
        case DELETE:
            return { ...state, users :state.users.filter((user) => user.id !== action.payload) }
        default:
            return state
    }
}

export default users