import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

const CustomCheckbox = (props) => {
  const [isSelected, setSelection] = useState(false);
  const handleSelection = (e) => {
    setSelection(e);
  }
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        value={isSelected}
        onValueChange={handleSelection}
        style={styles.checkbox}
        color={isSelected ? "#e37e38" : undefined}
      />
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
    width: 15,
    height: 15,
  },
  label: {
    margin: 8,
    color: "#666",
  },
});
