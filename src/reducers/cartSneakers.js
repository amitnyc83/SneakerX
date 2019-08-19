const initialState = {
  cartSneakers: []
}


const reducer = ( state = initialState, action ) = {
  switch(action.type) {
    case "ADD_SNEAKER_CART":
    const sneakerToCart = action.payload
    return {
      cartSneaker: [...state.cartSneakers, sneakerToCart]
    }


    case "GET_CART":
    const fetchCart = action.payload
    retun {cartSneakers: fetchcart }


    default:
    return state
  }
}

export
