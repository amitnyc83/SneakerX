const initialState = {
  user: []
}


export default ( state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case "NEW_USER_SUCCESS":
    return {user: [action.payload]}


    default:
    return state
  }
}
