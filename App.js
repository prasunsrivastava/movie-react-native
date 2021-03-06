import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider as ReduxProvider } from "react-redux";

import MoviesNavigator from "./navigation/MoviesNavigator";
import movieReducer from "./store/reducers/movie";
import genreReducer from "./store/reducers/genres";

const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
  });
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoaded(true);
        }}
        onError={() => {
          console.log("Font Not Loaded");
        }}
      />
    );
  }
  return (
    <ReduxProvider store={store}>
      <MoviesNavigator />
    </ReduxProvider>
  );
}
