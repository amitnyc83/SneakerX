const initialState = {
  sneakers: []
}


const getSneakers = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_SNEAKERS':
    return { sneakers: [action.payload]}

    default:
    return state
  }
}


export default getSneakers
