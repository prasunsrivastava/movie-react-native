import React from "react";
import { PixelRatio, View, Text, StyleSheet } from "react-native";

const MovieCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      {/* <Text>Current Pixel Ratio is: {PixelRatio.getFontScale()}</Text> */}
      <Text style={styles.title}>{props.movie.title}</Text>
      <Text style={styles.subtitle}>
        {props.movie.year} | {props.movie.runtime} min |{" "}
        {props.movie.genres.join(", ")}
      </Text>
      <Text style={styles.actors}>{props.movie.actors}</Text>
      <Text style={styles.plot}>{props.movie.plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: "#EEEEEE",
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "inter-medium",
    color: "#062F82",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "inter-medium",
    color: "#4A5568",
    marginVertical: 5,
  },
  actors: {
    fontSize: 15,
    fontFamily: "inter-medium",
    lineHeight: 22,
    color: "#4C0AD8",
    marginVertical: 5,
  },
  plot: {
    fontSize: 13,
    fontFamily: "inter-medium",
    lineHeight: 20,
    color: "#4A5568",
    marginVertical: 5,
  },
});

export default MovieCard;
