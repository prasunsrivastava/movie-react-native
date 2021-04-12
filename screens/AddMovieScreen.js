import React, { useState, useEffect, useCallback } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Item, Label } from "native-base";
import { useSelector, useDispatch } from "react-redux";

import LabelInput from "../components/LabelInput";
import LabelPicker from "../components/LabelPicker";
import LabelTextarea from "../components/LabelTextarea";
import TextButton from "../components/TextButton";
import { addMovie } from "../store/actions/movie";

const AddMovieScreen = (props) => {
  const genres = useSelector((state) => state.genres.genres);
  const [movieName, setMovieName] = useState("");
  const [movieLength, setMovieLength] = useState("");
  const [movieGenre, setMovieGenre] = useState(genres[0]);
  const [year, setYear] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");

  const dispatch = useDispatch();

  const addMovieDataHandler = useCallback(() => {
    const movie = {
      title: movieName,
      year: year,
      runtime: movieLength,
      genres: [movieGenre],
      actors: actors,
      plot: plot,
    };
    dispatch(addMovie(movie));
    props.navigation.goBack();
  }, [dispatch, movieName, year, movieLength, movieGenre, actors, plot]);

  useEffect(() => {
    props.navigation.setParams({ addMovie: addMovieDataHandler });
  }, [addMovieDataHandler]);

  return (
    <LinearGradient
      colors={["#E7EEFD", "#F3EEFD", "#FEFEFE"]}
      style={styles.container}
      start={{ x: 0.7, y: 0 }}
    >
      <View style={styles.container}>
        <Item stackedLabel style={styles.movieContainer}>
          <Label style={styles.movieLabel}>Movie Name</Label>
          <Input
            onChangeText={(value) => setMovieName(value)}
            style={styles.movieInput}
          />
        </Item>
        <LabelInput
          placeholder="Movie Length"
          labelText="Length"
          iconName="warning"
          iconType="AntDesign"
          onChangeText={setMovieLength}
          labelIconSize={18}
        />
        <LabelPicker
          placeholder="Actors"
          labelText="Genre"
          iconName="clipboard-notes"
          iconType="Foundation"
          labelItems={genres}
          selectedValue={movieGenre}
          onValueChange={setMovieGenre}
          labelIconSize={25}
        />
        <LabelInput
          placeholder="Release Year"
          labelText="Year"
          iconName="calendar"
          iconType="AntDesign"
          onChangeText={setYear}
          labelIconSize={18}
        />
        <LabelInput
          placeholder="Actors"
          labelText="Actors"
          iconName="adduser"
          iconType="AntDesign"
          onChangeText={setActors}
          labelIconSize={18}
        />
        <LabelTextarea
          labelText="Plot"
          iconName="clipboard-list"
          iconType="FontAwesome5"
          onChangeText={setPlot}
          labelIconSize={22}
        />
      </View>
    </LinearGradient>
  );
};

AddMovieScreen.navigationOptions = (navigationData) => {
  const buttonHandler = navigationData.navigation.getParam("addMovie");
  return {
    title: "Add a new Movie",
    headerTitleStyle: {
      fontSize: 18,
    },
    headerRight: () => {
      return (
        <TextButton
          onPress={buttonHandler}
          title="Save"
          color="green"
          bgcolor="rgba(255, 255, 255, 0.3)"
          fontSize={18}
        />
      );
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  movieContainer: {
    marginTop: 10,
  },
  movieLabel: {
    fontFamily: "inter-medium",
  },
  movieInput: {
    fontFamily: "inter-medium",
  },
});

export default AddMovieScreen;
