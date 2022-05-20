import { combineReducers } from "redux"

import users  from './users'
import subscriptions  from './subscriptions'

export default combineReducers({ users, subscriptions })