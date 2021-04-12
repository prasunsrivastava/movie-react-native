import React from "react";
import { Button, View, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "react-navigation-stack";
import { useSelector } from "react-redux";

import MovieCard from "../components/MovieCard";
import FloatingActionButton from "../components/FloatingActionButton";
// import data from "../data/data";

const MovieListScreen = (props) => {
  const headerHeight = useHeaderHeight();
  const movies = useSelector((state) => state.movies.movies);
  return (
    <LinearGradient
      colors={["#E7EEFD", "#F3EEFD", "#FEFEFE"]}
      style={styles.container}
      start={{ x: 0.7, y: 0 }}
    >
      <View style={{ ...styles.container, marginTop: headerHeight }}>
        <FlatList
          data={movies}
          renderItem={(item) => <MovieCard movie={item.item} />}
        />
        <FloatingActionButton
          onPress={() => {
            props.navigation.navigate({ routeName: "AddMovie" });
          }}
        />
      </View>
    </LinearGradient>
  );
};

MovieListScreen.navigationOptions = {
  title: "Movies List",
  headerStyle: {
    elevation: 0,
  },
  headerTitleStyle: {
    fontSize: 24,
  },
  headerTransparent: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieListScreen;
