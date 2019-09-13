// const API_URL = process.env.REACT_APP_API_URL;


export function fetchSneakers(){
  return (dispatch) => {
    return fetch(`http://localhost:3001/sneakers`)
    .then(response => response.json())
    .then((sneakers) => dispatch({type: "FETCH_SNEAKERS", payload: sneakers}))
  }
}


export const addSneaker = (newSneaker) => {
  return {
    type: "ADD_SNEAKER_SUCCESS",
    payload: newSneaker
  }
}
