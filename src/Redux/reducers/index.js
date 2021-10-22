import { data } from "./data";

const INITIAL_STATE = {
  films: data
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_FILMS":
      return { ...state, films: [...state.films, action.payload] };
    case "ADD_FILMS":
      return {
        ...state,
        films: [
          {
            id: state.films.length,
            name: action.payload,
            director: action.payload,
            image: action.payload
          },
          ...state.films
        ]
      };
    default:
      return state;
  }
};
