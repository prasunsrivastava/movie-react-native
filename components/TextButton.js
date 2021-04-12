import React from "react";
import { View, TouchableNativeFeedback, Text, StyleSheet } from "react-native";

const TextButton = ({ title, onPress, fontSize, color, bgColor }) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(bgColor)}
      >
        <Text style={{ ...styles.text, fontSize, color }}>{title}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "green",
    fontFamily: "inter-medium",
    margin: 5,
    padding: 7.5,
  },
});

export default TextButton;
