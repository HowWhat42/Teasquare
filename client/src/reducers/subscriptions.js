import { START_LOADING, END_LOADING, FETCH_BY_ID, SUBSCRIBE, UNSUBSCRIBE } from '../constants/actionTypes'

const subscriptions = (state = { isLoading: true, subscriptions: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING: 
            return { ...state, isLoading: false }
        case FETCH_BY_ID:
            return { ...state, subscriptions: action.payload }
        case SUBSCRIBE:
            return { ...state, subscriptions :[...state.subscriptions, action.payload] }
        case UNSUBSCRIBE:
            return { ...state, subscriptions :state.subscriptions.filter((sub) => sub.id !== action.payload) }
        default:
            return state
    }
}

export default subscriptions