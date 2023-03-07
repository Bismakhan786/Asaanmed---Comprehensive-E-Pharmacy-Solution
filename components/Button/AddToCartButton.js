import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/slices/CartSlice";

const AddToCartButton = (props) => {
    console.log(props)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 14,
      }}
    >
      <TouchableOpacity
        onPress={() => {props.mapDispatchToProps(props.product)}}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e38b37",
          padding: 15,
          borderRadius: 10,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text
          style={{
            color: "#e7e7e7",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {props.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart: (product)=>{
            dispatch(addToCart({quantity: 1, product}))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddToCartButton);
// export default AddToCartButton;
