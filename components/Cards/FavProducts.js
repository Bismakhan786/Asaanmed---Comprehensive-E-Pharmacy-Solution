import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { windowWidth } from "../../utils/Dimension";
import { windowHeight } from "../../utils/Dimension";
import { Ionicons } from "@expo/vector-icons";
import { connect, Connect, useDispatch } from "react-redux";
import { getFavouriteItems, removeFavItem } from "../../Redux/slices/UserSlice";
import { colors } from "../../constants";

const FavProduct = (props) => {
  const dispatch = useDispatch();
  const product = props.item.productId;

  const removeFavHandle = () => {
    const newProduct = { productId: product._id };
    dispatch(removeFavItem(newProduct));
  };

  return (
    <>
      <View
        style={{
          marginBottom: 10,
          marginVertical: "2%",
          marginHorizontal: "2%",
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ProductDetails", product)}
          style={{
            width: windowWidth * 0.42,
            marginBottom: 10,
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
        <Text style={{ color: "white" }}>{product.offer}% OFF</Text>
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
              source={{ uri: product.image ? product.image[0].url : null }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
            />
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "18%",
                top: -30,
                right: -20,
              }}
            >
              <Ionicons name="heart-sharp" size={20} color="#e38b37" />
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "#38343a",
              fontWeight: "600",
              marginBottom: 2,
              textTransform: 'capitalize'
            }}
          >
            {product.name}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        <Text style={{ fontSize: 11 }}>PKR. </Text>
        {Number(
          product.price - product.price * (product.offer / 100)
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
        {Number(product.price).toFixed(2)}
      </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={removeFavHandle}
          style={{
            padding: 6,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FavProduct;
