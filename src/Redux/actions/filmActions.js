export const getFilms = (films) => {
  return { type: "GET_FILMS", payload: films };
};

export const addFilms = (name, director, image) => {
  return {
    type: "ADD_FILMS",
    payload: {
      name,
      director,
      image,
    },
  };
};
export const removeFilms = (films) => {
  return { type: "REMOVE_FILMS", payload: films };
};
