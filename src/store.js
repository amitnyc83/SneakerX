import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import users from './reducers/users';
import sneakers from './reducers/sneakers';
import cartSneakers from './reducers/cartSneakers'


const reducers = combineReducers({
  users,
  sneakers,
  cartSneakers
});


const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;
