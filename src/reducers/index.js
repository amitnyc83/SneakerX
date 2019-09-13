import {combineReducers} from 'redux';

import sneakers from './sneakers'
import users from './users'
import cartSneakers from './cartSneakers'


export default combineReducers({
  sneakers,
  users,
  cartSneakers
})
