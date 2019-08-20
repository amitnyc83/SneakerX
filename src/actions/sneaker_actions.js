const API_URL = process.env.REACT_APP_API_URL;





// ** Async Actions **


export function fetchSneakers() {
  return (dispatch) => {
    return fetch(`${API_URL}/sneakers`)
    .then(response => response.json())
    .then((data) => dispatch({type: "FETCH_SNEAKERS", payload: data}))
  }
}


export const addSneaker = (newSneaker) => {
  return {
    type: "ADD_SNEAKER_SUCCESS",
    payload: newSneaker
  }
}
