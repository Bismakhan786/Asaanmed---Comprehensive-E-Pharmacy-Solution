
import React from "react";
import {
  View,
  Text,
} from "react-native";
import { colors } from "../../constants";

const ErrorTooltip = ({error}) => {
    return(
        <View
          style={{
            backgroundColor: colors.darkGray,
            paddingHorizontal: 5,
            paddingVertical: 10,
            marginHorizontal: 20,
            alignSelf: "center",
            borderRadius: 5,
            elevation: 8,
            position: "absolute",
            bottom: 100,
            width: "80%",
            zIndex: 100,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {error}
          </Text>
        </View>
    )
}

export default ErrorTooltip