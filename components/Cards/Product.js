import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { windowWidth } from "../../utils/Dimension";
const Product = (props) => {
  return (
    <TouchableOpacity
      key={props.index}
      onPress={props.onPress}
      style={{
        width: windowWidth * 0.42,
        marginVertical: "2%",
        marginHorizontal: "2%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "green",
          left: 30,
          right: 30,
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingVertical: 3,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <Text style={{ color: "white" }}>{props.item.offer}% OFF</Text>
      </View>
      <View
        style={{
          marginTop: 15,
          width: "100%",
          height: 150,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: props.item.image[0].url }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
      <Text
        style={{
          color: "#38343a",
          fontWeight: "bold",
          marginBottom: 2,
          textTransform: "capitalize",
        }}
      >
        {props.item.name}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        <Text style={{ fontSize: 11 }}>PKR. </Text>
        {Number(
          props.item.price - props.item.price * (props.item.offer / 100)
        ).toFixed(2)}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: "red",
          textDecorationLine: "line-through",
          fontWeight: "400",
          marginBottom: 2,
          fontSize: 13,
        }}
      >
        {Number(props.item.price).toFixed(2)}
      </Text>

      <Text
        style={{
          fontSize: 11,
          fontWeight: "bold",
          color: props.item.cat.color,
          marginBottom: 2,
          textTransform: "uppercase",
        }}
      >
        {props.item.cat.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Product;
