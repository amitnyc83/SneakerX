const initialState = {
  allSneakers: []
}


const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case "FETCH_SNEAKERS":
    const fetchedSneakers = action.payload
    return {allSneakers: fetchedSneakers}

    case "ADD_SNEAKER":
    const newSneaker = action.payload;
    return {allSneakers: [...state.allSneakers, newSneaker]}

    default:
    return state
  }
}


export default reducer;
