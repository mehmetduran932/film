import { data } from "./data";

const INITIAL_STATE = {
  films: data,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_FILMS":
      return { ...state, films: [...state.films, action.payload] };
    default:
      return state;
  }
};
