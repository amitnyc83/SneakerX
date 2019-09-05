const initialState = {
  cartSneakers: []
}


const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "ADD_SNEAKER_CART":
    return {
      cartSneakers: [...state.cartSneakers.carts, action.payload]
    }


    case "FETCH_CART":
    return {cartSneakers: action.payload }


    default:
    return state
  }
}

export default reducer;
