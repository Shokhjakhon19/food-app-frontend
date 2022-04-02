const initialState = {
  stol_id: 0,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STOL":
      return { ...state, stol_id: (state.stol_id = action.payload) };
    case "NULL":
      break;
    default:
      return state;
  }
};

export default products;
