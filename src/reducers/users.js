const initialState = {
  user: {}
}

export const createUser = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case "NEW_USER":
    return {user: [action.payload]}
  }
  return newState;
}

export default createUser;
