import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordField = ({ label }) => {
  const [secureText, setSecureTextEnable] = useState(true);

  const enableSecureText = () => {
    if (!secureText) {
      setSecureTextEnable(true);
    } else {
      setSecureTextEnable(false);
    }
  };
  return (
    <View>
      <Text style={styles.txt}>{label}</Text>
      <View style={styles.field}>
        <TextInput style={styles.input} secureTextEntry={secureText} selectionColor={'#e38b37'}/>
        <TouchableOpacity onPress={enableSecureText}>
          <Ionicons
            name={
              secureText === true ? "ios-eye-off-outline" : "ios-eye-outline"
            }
            size={24}
            color="#afafaf"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  txt: {
    color: "#666",
    fontSize: 13,
    marginVertical: 10,
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
});
