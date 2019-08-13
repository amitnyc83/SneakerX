export function fetchSneakers() {
  return (dispatch) => {
    return  fetch(`http://localhost:3001/sneakers`)
      .then(response => response.json())
      .then((data) => dispatch({type: "FETCH_SNEAKERS", payload: data}))
   }
}
