import data from "../../data/movies.json";

const initialState = {
  genres: data.genres,
};

const genreReducer = (state = initialState, action) => {
  return state;
};

export default genreReducer;
