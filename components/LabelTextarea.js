import React from "react";
import { Textarea } from "native-base";
import { View, StyleSheet } from "react-native";

import IconLabel from "./IconLabel";

const LabelTextarea = (props) => {
  return (
    <View>
      <View style={styles.item}>
        <IconLabel {...props} />
      </View>
      <View style={styles.textContainer}>
        <Textarea
          rowspan={10}
          bordered
          onChangeText={props.onChangeText}
          style={styles.textarea}
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
    borderBottomWidth: 3,
  },
  textContainer: {
    width: "100%",
    height: 200,
  },
  textarea: {
    fontFamily: "inter-medium",
    fontSize: 16,
    height: "100%",
  },
});

export default LabelTextarea;
