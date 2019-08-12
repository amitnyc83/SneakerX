import { combineReducers } from 'redux';
import sneakers from './sneakers';
import user from './users';



export default combineReducers({
  sneakers,
  user
})
