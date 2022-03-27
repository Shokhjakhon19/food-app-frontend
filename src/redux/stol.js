const initialState = {
  stol_id: 0,
  stol_1: 0,
  stol_2: 0,
  stol_3: 0,
  stol_4: 0,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STOL":
      return { ...state, stol_id: (state.stol_id = action.payload) };
    case "STOL_1_COUNTER":
      return { ...state, stol_1: (state.stol_1 = action.payload) };
    case "STOL_2_COUNTER":
      return { ...state, stol_2: (state.stol_2 = action.payload) };
    case "STOL_3_COUNTER":
      return { ...state, stol_3: (state.stol_3 = action.payload) };
    case "STOL_4_COUNTER":
      return { ...state, stol_4: (state.stol_4 = action.payload) };
    case "NULL":
      break;
    default:
      return state;
  }
};

export default products;
