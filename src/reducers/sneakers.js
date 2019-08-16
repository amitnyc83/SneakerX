const initialState = {
  allSneakers: []
}


export default (state = initialState, action ) => {
  switch(action.type) {
    case "GET_SNEAKERS_SUCESS":
    return {allSneakers: [action.sneakers]};

    case "CREATE_SNEAKER_SUCCESS":
    const newSneaker = action.payload;
    return { allSneakers: [...state.allSneakers, newSneaker]}

    default:
    return state
  }
}
