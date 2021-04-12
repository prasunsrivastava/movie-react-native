import React from "react";
import { Input } from "native-base";
import { View, StyleSheet } from "react-native";

import IconLabel from "./IconLabel";

const LabelInput = (props) => {
  return (
    <View style={styles.item}>
      <IconLabel {...props} />
      <View style={styles.inputContainer}>
        <Input
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#EDF2F7",
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: "40%",
  },
  input: {
    fontFamily: "inter-medium",
    fontSize: 16,
  },
});

export default LabelInput;
