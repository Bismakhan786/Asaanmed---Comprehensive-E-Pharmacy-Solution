import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';


const ReOrderItem = (props) => {
  
    console.log(props.item)
  const totalPrice = props.item.product.price * props.item.qty;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          marginVertical: 5,
          // marginHorizontal: 16,
          // padding: 8,
          // borderRightWidth: 2,
          // borderBottomWidth: 2,
          // borderRadius: 10,
          // borderRightColor: 'rgba(0, 0, 0, 0.25)',
          // borderBottomColor: 'rgba(0, 0, 0, 0.15)',
          // backgroundColor: "rgba(0, 0, 0, 0.03)",
        }}
      >
        
        <View
          style={{
            width: "15%",
            // marginRight: 16,
            paddingVertical: 8,
          }}
        >
          <Image
            source={{uri: props.item.product.image[0].url}}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text style={{textAlign: 'left', width: '40%', textTransform: 'uppercase'}} ellipsizeMode='tail' numberOfLines={2}>{props.item.product.name}</Text>
        <Text style={{textAlign: 'center', width: '30%'}}>{totalPrice.toFixed(2)}</Text>
        <Text style={{textAlign: 'center', width: '15%'}}>{props.item.qty}</Text>

      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    removeItemFromCart: (id) => {
      dispatch(removeFromCart(id))
    },
  }
}

export default ReOrderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
  },
  price: {
    fontSize: 12,
    fontWeight: "500",
    color: "#e38b37",
  },
  qtyText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#38343a",
  },
  qtyIcon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
