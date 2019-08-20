const API_URL = process.env.REACT_APP_API_URL;


export const addSneakerCart = (cartSneaker) => {
  return {
    type: "ADD_SNEAKER_CART",
    payload: cartSneaker
  }
}


export function fetchCart() {
  return (dispatch) => {
    return fetch(`${API_URL}/carts`)
    .then(response => response.json())
    .then((data) => dispatch({
      type: "FETCH_CART",
      payload: data
    }))
  }
}
