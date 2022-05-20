import { START_LOADING, END_LOADING, FETCH_BY_ID, SUBSCRIBE, UNSUBSCRIBE } from '../constants/actionTypes'
import * as api from '../api'

export const getSubscriptions = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.fetchSubscriptions(id)

        dispatch({type: FETCH_BY_ID, payload: data })
        dispatch({type: END_LOADING})
    } catch (err) {
        console.log(err)
    }    
}

export const createSubscription = (sub) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.createSubscription(sub)

        dispatch({ type: SUBSCRIBE, payload: data })
        dispatch({type: END_LOADING})
    } catch (err) {
        console.log(err)
    }
}


export const deleteSubscription = (id) => async (dispatch) => {
    try {
        await api.deleteSubscription(id)

        dispatch({ type: UNSUBSCRIBE, payload: id })
    } catch (err) {
        console.log(err)
    }
}