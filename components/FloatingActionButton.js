import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const FloatingActionButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 75,
    height: 75,
    backgroundColor: "#2F80ED",
    borderRadius: 40,
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 35,
    color: "#fff",
  },
});

export default FloatingActionButton;
