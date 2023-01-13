const intialState = {
  loader: true,
};

export const marketValueReducer = (state = intialState, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        loader: false,
        marketData: action.data,
      };

    default:
      return intialState;
  }
};
