import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import { colors } from "../../constants";
import Header from "../../components/Header/Header";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  clearPlaceOrderError,
  clearPlaceOrderSuccess,
  placeOrder,
} from "../../Redux/slices/OrdersSlice";
import { clearCart } from "../../Redux/slices/CartSlice";
import Modal from "react-native-modal";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddressField from "../../components/Fields/AddressField";
import BarLoader from "../../components/BarLoader/BarLoader";
import ErrorTooltip from "../../components/ErrorTooltip/ErrorTooltip";

const Checkout = (props) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();

  const {
    itemsTotal,
    totalPrice,
    shippingPrice,
    newItems,
    bachat,
    orderStatus,
  } = route.params;
  const paymentType = "COD";

  // modal states
  const [modalVisible, setModalVisible] = useState(false);
  const [selectAddressModalVisible, setSelectAddressModalVisible] =
    useState(false);
  const { placeOrderLoading, placeOrderSuccess, placeOrderError } = useSelector(
    (state) => state.orders
  );


  useFocusEffect(
    useCallback(() => {
      if (placeOrderSuccess) {
        props.emptyCart();
        setModalVisible(true);
        dispatch(clearPlaceOrderSuccess());
      }
      if (placeOrderError) {
  
        setTimeout(() => {
          dispatch(clearPlaceOrderError());
        }, 3000);
  
      }
      
    }, [dispatch, placeOrderSuccess, placeOrderError])
  );

  const { loadingAddressBook, addressBook } = useSelector(
    (state) => state.addressBook
  );

  let currentAddress = {
    streetAddress: "",
    floorOrApartment: "",
    city: "",
    postalCode: "",
  };

  if (addressBook && addressBook.length > 0) {
    currentAddress = addressBook[addressBook.length - 1];
  }

  const [streetAddress, setStreetAddress] = useState(
    currentAddress.streetAddress
  );
  const [floorOrApartment, setFloorOrAprtment] = useState(
    currentAddress.floorOrApartment
  );
  const [city, setCity] = useState(currentAddress.city);
  const [postalCode, setPostalCode] = useState(currentAddress.postalCode);

  let items = [];
  newItems &&
    newItems.map((item, index) => {
      items.push({
        qty: item.qty,
        product: item.product._id,
      });
    });

  const handleSubmit = async () => {
    const USERID = await AsyncStorage.getItem("USERID");

    if (!USERID) {
      Toast.show({
        type: "error",
        text1: "Couldn't Place Order!",
        text2: "Please Login to place order..",
      });
    } else {
      const orderData = {
        shippingInfo: {
          streetAddress,
          floorOrApartment,
          city,
          postalCode,
        },
        orderItems: items,
        paymentInfo: {
          id: paymentType,
          status: paymentType,
        },
        itemsTotal,
        shippingPrice,
        totalPrice,
        orderStatus,
      };

      console.log(orderData);
      dispatch(placeOrder(orderData));
    }
  };

  const SelectAddressModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <ScrollView>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 16,
                fontSize: 15,
                letterSpacing: 0.6,
              }}
            >
              Select Address
            </Text>
            {addressBook &&
              addressBook.map((addr, index) => (
                <TouchableOpacity
                  onPress={() => {
                    setStreetAddress(addr.streetAddress);
                    setFloorOrAprtment(addr.floorOrApartment);
                    setCity(addr.city);
                    setPostalCode(addr.postalCode);
                    setSelectAddressModalVisible(false);
                  }}
                  key={index}
                  style={{
                    borderWidth: 1,
                    padding: 8,
                    borderRadius: 5,
                    marginVertical: 8,
                    borderColor: "rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>
                    {addr.streetAddress}
                  </Text>
                  {addr.floorOrApartment ? (
                    <Text>{addr.floorOrApartment}</Text>
                  ) : null}
                  <Text>{addr.city}</Text>
                  <Text>{addr.postalCode}</Text>
                </TouchableOpacity>
              ))}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("NewAddress");
                setSelectAddressModalVisible(false);
              }}
            >
              <Text
                style={{
                  color: colors.orange,
                  fontWeight: "bold",
                  letterSpacing: 0.5,
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                Add New Address
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <>
      {placeOrderError && (
        <ErrorTooltip error={placeOrderError}/>
      )}

      <Modal
        animationIn={"slideInUp"}
        transparent={true}
        isVisible={selectAddressModalVisible}
        hasBackdrop={true}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
        backdropOpacity={0.2}
        onBackButtonPress={() => setSelectAddressModalVisible(false)}
        onBackdropPress={() => setSelectAddressModalVisible(false)}
      >
        <SelectAddressModal />
      </Modal>

      {/* Modal for showing order placed successfuuly */}
      <Modal
        animationIn={"slideInUp"}
        transparent={true}
        isVisible={modalVisible}
        hasBackdrop={true}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
        backdropOpacity={0.2}
        onBackButtonPress={() => {
          navigation.navigate({
            name: "Orders",
            path: { caller: "Success" },
          });
          setModalVisible(!modalVisible);
        }}
        onBackdropPress={() => {
          navigation.navigate({
            name: "Orders",
            path: { caller: "Success" },
          });
          setModalVisible(!modalVisible);
        }}
      >
        {/* Modal View */}
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
              Congratulations! 🎉
            </Text>
            <Text style={{ color: "#666" }}>
              Your order has been placed successfully...
            </Text>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("TrackOrder");
                  setModalVisible(false);
                }}
              >
                <Text style={styles.buttonTxt}>Track</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate({
                    name: "Orders",
                    path: { caller: "Success" },
                  });
                }}
              >
                <Text style={styles.buttonTxt}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={styles.container}>
        {/* Delivery details section */}
        {/* Header */}
        <Header
          navigation={navigation}
          label={"Checkout"}
          showLabel={true}
          showBackIcon={true}
        />
        {loadingAddressBook || placeOrderLoading ? (
          <BarLoader />
        ) : (
          <ScrollView style={{ marginTop: 16, marginBottom: 16 }}>
            <Text style={styles.heading}>Delivery Address:</Text>
            <AddressField
              inputLabel={"Street"}
              inputValue={streetAddress}
              onChangeText={(text) => setStreetAddress(text)}
            />
            {floorOrApartment ? (
              <AddressField
                inputLabel={"Floor Or Apartment (Optional)"}
                inputValue={floorOrApartment}
                onChangeText={(text) => setFloorOrAprtment(text)}
              />
            ) : null}
            <AddressField
              inputLabel={"City"}
              inputValue={city}
              onChangeText={(text) => setCity(text)}
            />
            <AddressField
              inputLabel={"Postal Code"}
              inputValue={postalCode}
              onChangeText={(text) => setPostalCode(text)}
            />

            {/* Change current address section */}
            <TouchableOpacity
              style={styles.changeAddrBtn}
              onPress={() => setSelectAddressModalVisible(true)}
            >
              <Text style={styles.chngAddrTxt}>Select Address</Text>
            </TouchableOpacity>
            {/* Payment method section */}
            <Text style={styles.heading}>Payment Method:</Text>
            <Text style={styles.txt}>Cash on delivery (COD)</Text>
          </ScrollView>
        )}

        {/* Total amount section */}
        <View style={styles.bottom}>
          <Text style={styles.bottomTxt}>Total Amount:</Text>
          <Text style={styles.bottomTxt}>PKR {totalPrice}</Text>
        </View>

        {/* Button for place order */}
        <CustomBottomButton label={"PLACE ORDER"} onPress={handleSubmit} />
        <Toast />
      </SafeAreaView>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => {
      dispatch(clearCart());
    },
  };
};

export default connect(null, mapDispatchToProps)(Checkout);

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    // height: "20%",
    maxHeight: "50%",
    width: "100%",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 6,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#6666",
    marginHorizontal: 2,
    padding: 8,
    borderRadius: 8,
  },
  buttonTxt: {
    color: "#e37e38",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  section: {
    marginHorizontal: 16,
  },
  heading: {
    marginTop: 8,
    marginHorizontal: 16,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  addrSubHead: {
    color: "#e37e38",
    fontWeight: "bold",
    marginTop: 16,
    letterSpacing: 1,
  },
  txt: {
    color: "#666",
    marginHorizontal: 16,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    width: "90%",
    marginHorizontal: 16,
  },
  bottomTxt: {
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 16,
  },
  changeAddrBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: "10%",
    marginHorizontal: 16,
  },
  chngAddrTxt: {
    fontWeight: "bold",
  },
});
