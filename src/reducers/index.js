
import { combineReducers } from 'redux'
import cart from './cart'
 // eslint-disable-next-line
import blog from './blog'
import notifications from './notifications'
import user from './user'
export default combineReducers({ cart,blog,notifications,user })