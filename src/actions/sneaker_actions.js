export function fetchSneakers() {
  return (dispatch) => {
    return  fetch(`http://localhost:3001/products`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then((data) => dispatch({type: "FETCH_SNEAKERS", payload: data}))

   }
}
