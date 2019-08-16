const API_URL = process.env.REACT_APP_API_URL;


// ** Actions Creators **


const setSneakers = sneakers => {
  return {
    type: "GET_SNEAKERS_SUCCESS",
    sneakers
  }
}




// ** Async Actions **


export const getSneakers = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/sneakers`)
    .then(response => response.json())
    .then(sneakers => {
      dispatch(setSneakers(sneakers))
    })
    .catch(error => console.log(error));
  }
}


export const addSneaker = (newSneaker) => {
  return {
    type: "ADD_SNEAKER_SUCCESS",
    payload: newSneaker
  }
}
