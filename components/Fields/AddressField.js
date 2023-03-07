import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { color } from "react-native-reanimated";

const AddressField = ({ inputLabel, inputValue, onChangeText }) => {
  return (
    <View style={styles.field}>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      <TextInput
        style={styles.input}
        defaultValue={inputValue ? String(inputValue) : ""}
        selectionColor="#e38b37"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default AddressField;

const styles = StyleSheet.create({
  field: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  inputLabel: {
    color: "#666",
    marginVertical: 8,
  },
  input: {
    borderWidth: 0.3,
    borderColor: "#666",
    padding: 8,
    borderRadius: 5,
    color: "rgba(0, 0, 0, 0.7)",
  },
});
