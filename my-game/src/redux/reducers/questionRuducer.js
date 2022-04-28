import initState from "../initState";

const questionReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_QUESTION":
      return  payload;

    default:
      return state;
  }
};

export default questionReducer;
