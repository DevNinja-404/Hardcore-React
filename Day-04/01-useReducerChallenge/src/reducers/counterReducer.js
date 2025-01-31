const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "incrementBy":
      return { ...state, count: state.count + action.amount };
    case "decrementBy":
      return { ...state, count: state.count - action.amount };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export { initialState, counterReducer };
