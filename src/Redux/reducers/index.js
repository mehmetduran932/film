import { data } from "./data";

const INITIAL_STATE = {
  films: data,
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
            id: state.films.length + 1,
            name: action.payload.name,
            director: action.payload.director,
            image: action.payload.image,
          },
          ...state.films,
        ],
      };
    case "REMOVE_FILMS":
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
};
