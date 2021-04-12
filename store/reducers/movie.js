import data from "../../data/movies.json";
import { ADD_MOVIE } from "../actions/movie";

const initialState = {
  movies: data.movies,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const id = Math.max(...state.movies.map((movie) => movie.id)) + 1;
      const updatedMovies = [{ ...action.movie, id: id }, ...state.movies];
      return { ...state, movies: updatedMovies };
    default:
      return state;
  }
};

export default movieReducer;
