import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import CartItem from "../../components/Cards/CartItem";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import getTotal from "../../components/Helper/getTotal";
import Header from "../../components/Header/Header";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { removeFromCart, updateCartItems } from "../../Redux/slices/CartSlice";
import { connect } from "react-redux";

import CustomButton from "../../components/Button/CustomButton";
import { colors } from "../../constants";

function getSum(total, num) {
  return total + Math.round(num);
}

const CartTab = (props) => {



  let productsSum = props.cartItems
  .map((item) => item.totalPrice)
  .reduce(getSum, 0);
  
  let productsSumAfterDiscount = props.cartItems
  .map((item) => item.totalPriceAfterDiscount)
  .reduce(getSum, 0);
  
  let total = productsSum;
  let totalAfterDiscount = productsSumAfterDiscount;
  let bachat = total - totalAfterDiscount;
  const [error, setError] = useState(totalAfterDiscount < 3000 ? true : false)
  
  const shippingFee = 0;

  useEffect(() =>{
    if(totalAfterDiscount < 3000){
      setError(true)
    }
    else{
      setError(false)
    }
  }, [error, totalAfterDiscount])


  const increaseCount = (item) => () => {
    let { id, product, qty, priceAfterDiscount } = item;
    let newQtyProduct = qty + 1;
    let newTotalPrice = product.price * newQtyProduct;
    let newTotalAfterDiscount = priceAfterDiscount * newQtyProduct;
    const newProduct = {
      id,
      qty: newQtyProduct,
      product,
      priceAfterDiscount,
      totalPrice: newTotalPrice,
      totalPriceAfterDiscount: newTotalAfterDiscount,
    };
    props.updateItemsInCart(id, newProduct);
    productsSum = props.cartItems
      .map((item) => item.totalPrice)
      .reduce(getSum, 0);
    total = productsSum;
    productsSumAfterDiscount = props.cartItems
      .map((item) => item.totalPriceAfterDiscount)
      .reduce(getSum, 0);
    totalAfterDiscount = productsSumAfterDiscount;
    
    bachat = total - totalAfterDiscount;
  };

  const decreaseCount = (item) => () => {
    let { id, product, qty, priceAfterDiscount } = item;
    if (qty > 0) {
      let newQtyProduct = qty - 1;
      let newTotalPrice = product.price * newQtyProduct;
      let newTotalAfterDiscount = priceAfterDiscount * newQtyProduct;
      const newProduct = {
        id,
        qty: newQtyProduct,
        product,
        priceAfterDiscount,
        totalPrice: newTotalPrice,
        totalPriceAfterDiscount: newTotalAfterDiscount,
      };
      props.updateItemsInCart(id, newProduct);
      
      productsSum = props.cartItems
        .map((item) => item.totalPrice)
        .reduce(getSum, 0);
      total = productsSum;
      productsSumAfterDiscount = props.cartItems
        .map((item) => item.totalPriceAfterDiscount)
        .reduce(getSum, 0);
      totalAfterDiscount = productsSumAfterDiscount;
      
      bachat = total - totalAfterDiscount;
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={props.navigation}
        label={"Cart"}
        showLabel={true}
        showCrossIcon={true}
        showCartIcon={true}
      />
      {props.cartItems.length > 0 ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={props.cartItems}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 5,
                    marginHorizontal: 16,
                    padding: 8,
                    borderRadius: 10,
                    backgroundColor: "#e7e7e8",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => props.removeItemFromCart(item.id)}
                    style={{
                      position: "absolute",
                      top: -10,
                      right: 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="trash" size={20} color="#e38b37" />
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "25%",
                    }}
                  >
                    <Image
                      source={{ uri: item.product.image[0].url }}
                      style={{
                        width: 70,
                        height: 70,
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "75%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Title and price of a product */}
                    <View
                      style={{
                        marginBottom: 10,
                        width: "45%",
                      }}
                    >
                      <Text
                        style={styles.title}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >
                        {item.product.name}
                      </Text>
                      <Text
                        style={{
                          marginVertical: 2,
                          fontSize: 11,
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Disc. {item.product.offer}%
                      </Text>

                      <Text style={[styles.price, { color: "black" }]}>
                        PKR.{" "}
                        <Text style={{ fontSize: 15, color: "cadetblue" }}>
                          {item.product.price -
                            item.product.price * (item.product.offer / 100)}
                        </Text>
                      </Text>
                      <Text style={{ textDecorationLine: "line-through" }}>
                        {item.product.price.toFixed(2)}
                      </Text>
                    </View>

                    {/* Quantity Setter */}

                    <View
                      style={{
                        width: "45%",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        padding: 5,
                        marginRight: 10,
                        backgroundColor: "white",
                      }}
                    >
                      <TouchableOpacity onPress={decreaseCount(item)}>
                        <AntDesign
                          name="minus"
                          size={20}
                          color="#e38b37"
                          style={styles.qtyIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.qtyText}>{item.qty}</Text>
                      <TouchableOpacity onPress={increaseCount(item)}>
                        <AntDesign
                          name="plus"
                          size={20}
                          color="#e38b37"
                          style={styles.qtyIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 16,
              paddingBottom: 270,
            }}
          />
          <View style={styles.bottomSheet}>
           
            {/* Subtotal */}
            <View style={styles.bottomSheetFieldsContainer}>
              <Text style={styles.subTotalandShippingTxt}>Total:</Text>
              <Text style={styles.subTotalandShippingPriceTxt}>
                PKR. {total}
              </Text>
            </View>

            {/* Voucher Discount */}
            <View style={styles.bottomSheetFieldsContainer}>
              <Text
                style={[
                  styles.subTotalandShippingTxt,
                  { fontWeight: "bold", fontSize: 16 },
                ]}
              >
                Bachat <Text style={{ fontSize: 20 }}>🎉</Text>
              </Text>
              <Text
                style={[
                  styles.subTotalandShippingPriceTxt,
                  { fontWeight: "bold", fontSize: 16, color: colors.orange },
                ]}
              >
                PKR. {bachat}
              </Text>
            </View>

            {/* Shipping Charges */}
            <View style={styles.bottomSheetFieldsContainer}>
              <Text style={styles.subTotalandShippingTxt}>Delivery:</Text>
              <Text style={styles.subTotalandShippingPriceTxt}>Free</Text>
            </View>

            {/* Seperator Line */}
            <View
              style={{
                height: 1,
                borderWidth: 0.3,
                borderColor: "#6666",
                marginVertical: 16,
              }}
            ></View>

            {/* Total */}
            <View style={styles.bottomSheetFieldsContainer}>
              <Text style={styles.totalTxt}>Total:</Text>
              <Text style={styles.totalPriceTxt}>
                PKR. {totalAfterDiscount}
              </Text>
            </View>
            {error && (
              <View>
                <Text style={{ color: "red" }}>
                  Please make an order of 3000 to continue
                </Text>
              </View>
            )}
          </View>
          <CustomBottomButton
            label={"CHECKOUT"}
            disabled={error}
            onPress={() =>
              props.navigation.navigate("Checkout", {
                newItems: props.cartItems,
                itemsTotal: total,
                totalPrice: totalAfterDiscount,
                bachat: bachat,
                shippingPrice: shippingFee,
                orderStatus: "Processing",
              })
            }
          />
        </View>
      ) : (
        <View style={styles.emptyCart}>
          <Image
            source={require("../../assets/images/empty-cart.png")}
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
            }}
          />
          <Text style={styles.empCartTxt1}>Your cart is empty!</Text>
          <Text style={styles.empCartTxt2}>Explore Now to fill it up...</Text>
          <CustomButton
            label={"CONTINUE SHOPPING"}
            onPressFunction={() => props.navigation.navigate("AllCategories")}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
    updateItemsInCart: (productId, newProduct) => {
      dispatch(updateCartItems({ productId, newProduct }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subTotalandShippingTxt: {
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 2,
  },
  subTotalandShippingPriceTxt: {
    fontSize: 14,
    fontWeight: "500",
  },
  totalTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38343a",
    // color: "#e4e8eb"
  },
  totalPriceTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38343a",
    // color: "#e4e8eb"
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    bottom: 0,
    paddingTop: 8,
    paddingBottom: 65,
    paddingHorizontal: 20,
    elevation: 6,
    shadowColor: "#666",
    borderTopWidth: 1.5,
    borderTopColor: "rgba(0, 0, 0, 0.25)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bottomSheetFieldsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empCartTxt1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#666",
  },
  empCartTxt2: {
    color: "#6666",
    fontWeight: "500",
    fontSize: 14,
    marginBottom: 16,
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
