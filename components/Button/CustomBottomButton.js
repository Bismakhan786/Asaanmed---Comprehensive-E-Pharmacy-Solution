import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../constants";

const CustomBottomButton = (props) => {
  return (
    <View style={styles.btnCon}>
        <TouchableOpacity
        
        disabled={props.disabled}
          onPress={props.onPress}
          style={[styles.btn, props.style, props.disabled && {backgroundColor: 'gray'}]}
        >
          <Text style={styles.btnTxt}>{props.label}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default CustomBottomButton;

const styles = StyleSheet.create({
  btnCon: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 14,
  },
  btn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e38b37",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    elevation: 4
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})
