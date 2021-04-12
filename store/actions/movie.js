export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = (movieData) => {
  return { type: ADD_MOVIE, movie: movieData };
};
