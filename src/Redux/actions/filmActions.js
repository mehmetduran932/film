export const getFilms = (films) => {
  return { type: "GET_FILMS", payload: films };
};
