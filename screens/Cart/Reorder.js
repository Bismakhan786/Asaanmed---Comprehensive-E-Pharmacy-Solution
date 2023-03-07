import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import Header from "../../components/Header/Header";

import ReOrderItem from "../../components/Cards/ReOrderItem";
import { colors } from "../../constants";

const Reorder = (props) => {
  // console.log(props)
  const { navigation, route } = props;
  const order = route.params;
  console.log("IN REORDER SCREEN ");
  console.log(order);
  return (
    <>
      <Header
        navigation={props.navigation}
        label={`ORDER: #${order._id}`}
        showLabel={true}
        showCrossIcon={true}
      />
      <SafeAreaView style={styles.container}>
        {/* <View style={{}}> */}
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            marginHorizontal: 16,
          }}
        >
          <Text style={styles.orderHead}>Order Details</Text>
          <Text style={styles.orderDate}>
            Date: {order.createdAt.slice(0, 10)}
          </Text>
        </View>
        <ScrollView
          style={{ marginTop: 10, marginBottom: 70, marginHorizontal: 16 }}
        >
          <View
            style={
              {
                // height: "50%",
                // marginHorizontal: 16,
              }
            }
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
                marginVertical: 5,
                borderBottomWidth: 2,
                borderBottomColor: "rgba(0, 0, 0, 0.15)",
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  width: "55%",
                  textTransform: "uppercase",
                }}
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                Product
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "30%",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Price
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "15%",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Qty
              </Text>
            </View>

            {order.orderItems.map((item, index) => (
              <ReOrderItem item={item} key={index} />
            ))}
            <View style={styles.separator}></View>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.secHead}>Shipping Details</Text>
            <Text
              style={{
                color: colors.orange,
                fontWeight: "bold",
                marginVertical: 6,
              }}
            >
              Street Address
            </Text>
            <Text>{order.shippingInfo.streetAddress}</Text>
            {order.shippingInfo.floorOrApartment ? (
              <>
                <Text
                  style={{
                    color: colors.orange,
                    fontWeight: "bold",
                    marginVertical: 6,
                  }}
                >
                  Floor Or Apartment
                </Text>

                <Text>{order.shippingInfo.floorOrApartment}</Text>
              </>
            ) : null}
            <Text
              style={{
                color: colors.orange,
                fontWeight: "bold",
                marginVertical: 6,
              }}
            >
              City
            </Text>
            <Text>{order.shippingInfo.city}</Text>
            <Text
              style={{
                color: colors.orange,
                fontWeight: "bold",
                marginVertical: 6,
              }}
            >
              Postal Code
            </Text>
            <Text>{order.shippingInfo.postalCode}</Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.secHead}>Total Amount</Text>
              <Text style={styles.secHead}>PKR. {order.totalPrice}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 6,
              }}
            >
              <Text>Items Total</Text>
              <Text>PKR. {order.totalPrice - order.shippingPrice}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 6,
              }}
            >
              <Text>Bachat</Text>
              <Text>PKR. {order.totalPrice - order.itemsTotal}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 6,
              }}
            >
              <Text>Shipping Price</Text>
              <Text>PKR. {order.shippingPrice}</Text>
            </View>
          </View>
        </ScrollView>

        {/* </View> */}
        <CustomBottomButton
          label={"Reorder"}
          onPress={() =>
            navigation.navigate("Checkout", {
              newItems: order.orderItems,
              itemsTotal: order.totalPrice - order.shippingPrice,
              totalPrice: order.totalPrice,
              shippingPrice: order.shippingPrice,
              orderStatus: "Processing"
            })
          }
        />
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer,
  };
};

export default Reorder;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "white",
  },
  orderHead: {
    paddingVertical: 10,
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  orderDate: {
    color: "#666",
    fontWeight: "600",
  },
  separator: {
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
  },
  secHead: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingVertical: 8,
  },
});
