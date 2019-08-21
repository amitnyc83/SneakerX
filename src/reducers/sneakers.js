const initialState = {
  allSneakers: []
}


const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case "GET_SNEAKER_SUCCESS":
    return {...state, allSneakers: [action.payload]};

    case "CREATE_SNEAKER_SUCCESS":
    const newSneaker = action.payload;
    return { ...state, allSneakers: [...state.allSneakers, newSneaker]}

    default:
    return state
  }
}


export default reducer;
