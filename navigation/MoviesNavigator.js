import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import MovieListScreen from "../screens/MovieListScreen";
import AddMovieScreen from "../screens/AddMovieScreen";

const MoviesNavigator = createStackNavigator(
  {
    MovieList: MovieListScreen,
    AddMovie: AddMovieScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#000000",
      headerTitleStyle: {
        fontFamily: "inter-medium",
      },
    },
  }
);

export default createAppContainer(MoviesNavigator);
