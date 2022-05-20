import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_USER, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.fetchUsers()

        dispatch({type: FETCH_ALL, payload: data })
        dispatch({type: END_LOADING})
    } catch (err) {
        console.log(err)
    }    
}

export const getUser = (id) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.fetchUser(id)

        dispatch({type: FETCH_USER, payload: data})
        dispatch({type: END_LOADING})
    } catch (err) {
        console.log(err)
    }    
}

export const createUser = (user, navigate) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const { data } = await api.createUser(user)

        navigate(`/users/${data.id}`)
        dispatch({ type: CREATE, payload: data })
        dispatch({type: END_LOADING})
    } catch (err) {
        console.log(err)
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        await api.updateUser(id, user)

        dispatch({ type: UPDATE, payload: user })
    } catch (err) {
        console.log(err)
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)

        dispatch({ type: DELETE, payload: id })
    } catch (err) {
        console.log(err)
    }
}