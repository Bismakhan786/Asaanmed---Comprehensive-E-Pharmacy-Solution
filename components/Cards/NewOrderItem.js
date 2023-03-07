import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// Modal for rate order
import RateOrderModal from "../Modal/RateOrderModal";
// import { Modal } from "react-native";
import Modal from "react-native-modal";
import UpcomingOrderDetailsModal from "../Modal/UpcomingOrderDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  clearCancelOrderError,
  clearCancelOrderSuccess,
  getAllMyOrders,
} from "../../Redux/slices/OrdersSlice";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { windowHeight, windowWidth } from "../../utils/Dimension";

const NewOrderItem = ({ navigation, item, orderType }) => {
  console.log(item);
  const dispatch = useDispatch();
  const [modalUpcVisible, setModalUpcVisible] = useState(false);

  const reorder = () => {
    navigation.navigate("Reorder", item);
  };

  const cancel = (id) => () => {
    console.log(id);
    dispatch(cancelOrder(id));
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Modal
            style={{ margin: 0, justifyContent: "flex-end" }}
            animationIn={"slideInUp"}
            transparent={true}
            isVisible={modalUpcVisible}
            hasBackdrop={true}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            backdropOpacity={0.2}
            onBackButtonPress={() => setModalUpcVisible(!modalUpcVisible)}
            onBackdropPress={() => setModalUpcVisible(!modalUpcVisible)}
          >
            <UpcomingOrderDetailsModal
              orderItems={item.orderItems}
              total={item.totalPrice}
              itemsTotal={item.itemsTotal}
              paymentType={item.paymentInfo.status}
            />
          </Modal>
        </View>
        <TouchableOpacity
          onPress={() => setModalUpcVisible(true)}
          disabled={
            orderType === "Delivered" || (orderType === "Cancelled" && true)
          }
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.orderID}>
              Order: #{item._id}
            </Text>
            <Text style={styles.total}>Rs {item.totalPrice}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.dateTimeItems}>
              {item.createdAt.slice(0, 10)}
            </Text>
            <View
              style={{
                height: 1,
                width: 1,
                borderWidth: 2,
                borderRadius: 40,
                marginHorizontal: 8,
                borderColor: "#6666",
              }}
            ></View>
            <Text style={styles.dateTimeItems}>
              {item.orderItems.length} items
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 1,
                  width: 1,
                  borderWidth: 3.5,
                  borderRadius: 40,
                  marginRight: 8,
                  borderColor:
                    orderType === "Delivered"
                      ? "green"
                      : orderType === "Upcoming"
                      ? "#c38200"
                      : "red",
                }}
              ></View>
              <Text
                style={[
                  styles.status,
                  orderType === "Delivered"
                    ? styles.statusDel
                    : orderType === "Upcoming"
                    ? styles.statusOnTheWay
                    : styles.statusCancel,
                ]}
              >
                {item.orderStatus}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              {(orderType === "Cancelled" || orderType === "Delivered") && (
                <TouchableOpacity style={styles.icon} onPress={reorder}>
                  <MaterialCommunityIcons
                    name={"replay"}
                    size={18}
                    color="whitesmoke"
                  />
                </TouchableOpacity>
              )}

              {orderType === "Upcoming" && (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={cancel(item._id)}
                >
                  <Entypo name={"cross"} size={18} color="whitesmoke" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewOrderItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modal: {
    height: "50%",
  },
  orderID: {
    width: "70%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    marginVertical: 3,
  },
  total: {
    fontWeight: "bold",
  },
  dateTimeItems: {
    fontSize: 12,
    color: "#666",
    fontWeight: "300",
    marginVertical: 3,
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
  },
  statusCancel: {
    color: "red",
  },
  statusDel: {
    color: "green",
  },
  statusOnTheWay: {
    color: "#c38200",
  },
  icon: {
    padding: 5,
    backgroundColor: "#e38b37",
    borderRadius: 40,
    marginLeft: 5,
  },
  iconContainer: {
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
