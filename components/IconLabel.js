import React from "react";
import { Icon } from "native-base";
import { View, Text, StyleSheet } from "react-native";

const IconLabel = (props) => {
  return (
    <View style={styles.labelContainer}>
      <Icon
        name={props.iconName}
        type={props.iconType}
        style={{ ...styles.labelIcon, fontSize: props.labelIconSize }}
      />
      <Text style={styles.labelText}>{props.labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelIcon: {
    marginRight: 20,
    fontSize: 18,
    color: "#A0AEC0",
  },
  labelText: {
    marginRight: 20,
    fontSize: 16,
    fontFamily: "inter-medium",
  },
});

export default IconLabel;
