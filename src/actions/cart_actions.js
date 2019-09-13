export const addSneakerCart = (cartSneaker) => {
  return {
    type: "ADD_SNEAKER_CART",
    payload: cartSneaker
  }
}

export const deletedCart = (cart) => {
  return {
    type: "DELETE_CART",
    payload: cart
  }
}




export function fetchCart() {
  return (dispatch) => {
    return fetch(`https://localhost:3001/carts`)
    .then(response => response.json())
    .then((data) => dispatch({
      type: "FETCH_CART",
      payload: data
    }))
  }
}
