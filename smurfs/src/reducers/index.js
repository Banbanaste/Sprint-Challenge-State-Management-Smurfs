const initialState = {
  smurfs: null,
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isLoading: true
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
