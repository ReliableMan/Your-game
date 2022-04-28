import initState from "../initState";

const scoreReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SCORE":
      return payload + state;

    case "UNSET_SCORE":
      return state - payload;

    case "DELETE_SCORE":
      return payload;

    default:
      return state;
  }
};

export default scoreReducer;
