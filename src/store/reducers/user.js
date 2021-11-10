const initialState = {
  user: {}
}

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'USER/GETUSER':
      return { ...state.user };
    default:
      return state;
  }
}

export default reducer;