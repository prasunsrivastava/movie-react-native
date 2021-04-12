import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";

import IconLabel from "./IconLabel";

const LabelPicker = (props) => {
  return (
    <View style={styles.item}>
      <IconLabel {...props} />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={{
            fontFamily: "inter-medium",
            height: 50,
            transform: [{ scaleX: 1 }, { scaleY: 1 }],
          }}
          selectedValue={props.selectedValue}
          onValueChange={(value) => {
            props.onValueChange(value);
          }}
        >
          {props.labelItems.map((item) => {
            return (
              <Picker.Item
                key={item}
                label={item}
                value={item}
                style={styles.labelItem}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
  },
  pickerContainer: {
    width: "60%",
  },
  picker: {
    width: "70%",
    height: 50,
    marginLeft: "30%",
  },
  labelItem: {
    fontFamily: "inter-medium",
    fontSize: 16,
  },
});

export default LabelPicker;
