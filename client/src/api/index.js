import axios from 'axios'

const baseUrl = `http://affi.teasquare.fr:3001/api`

export const fetchUsers = () => axios.get(`${baseUrl}/users/`)
export const fetchUser = (id) => axios.get(`${baseUrl}/users/${id}`)
export const fetchSponsors = (sponsor) => axios.get(`${baseUrl}/users/?sponsor=${sponsor}`)
export const createUser = (newUser) => axios.post(`${baseUrl}/users/`, newUser)
export const updateUser = (id, updatedUser) => axios.patch(`${baseUrl}/users/${id}`, updatedUser)
export const deleteUser = (id) => axios.delete(`${baseUrl}/users/${id}`)

export const fetchSubscriptions = (userId) => axios.get(`${baseUrl}/subscriptions/${userId}`)
export const createSubscription = (newSub) => axios.post(`${baseUrl}/subscriptions/`, newSub)
export const deleteSubscription = (id) => axios.delete(`${baseUrl}/subscriptions/${id}`)