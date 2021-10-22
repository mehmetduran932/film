export const getFilms = (films) => {
  return { type: "GET_FILMS", payload: films };
};

export const addFilms = (films) => {
  return { type: "ADD_FILMS", payload: [films] };
};
