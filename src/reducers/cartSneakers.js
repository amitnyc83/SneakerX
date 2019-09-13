const initialState = {
  cartSneakers: []
}


const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "ADD_SNEAKER_CART":
    const sneakerToCart = action.payload
    const addArray = [...state.cartSneakers.carts, sneakerToCart]
    return {cartSneakers: {carts: addArray}}


    case "FETCH_CART":
    return {cartSneakers: action.payload }


    default:
    return state
  }
}

export default reducer;
