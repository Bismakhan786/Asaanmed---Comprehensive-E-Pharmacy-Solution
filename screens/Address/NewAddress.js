import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddressField from "../../components/Fields/AddressField";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import Header from "../../components/Header/Header";
import { windowHeight } from "../../utils/Dimension";
import { useDispatch } from "react-redux";
import { addAddress } from "../../Redux/slices/UserAddressBook";

const NewAddress = ({ navigation, route }) => {
  console.log(route);
  let currentAddr = "";
  if (route.params) {
    currentAddr = route.params.addr;
  }
  console.log(currentAddr);

  const dispatch = useDispatch();

  const [streetAddress, setStreetAddress] = useState("");
  const [floorOrApartment, setFloorOrAprtment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleAddAddress = () => {
    const newAddress = {
      streetAddress,
      floorOrApartment,
      city,
      postalCode,
    };
    dispatch(addAddress(newAddress));
    navigation.navigate("AddressBook");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        label={"Add address"}
        showLabel={true}
        showCrossIcon={true}
      />
      <View style={{ paddingTop: 20 }}>
        <AddressField
          inputLabel={"Street Address"}
          inputValue={streetAddress}
          onChangeText={(text) => setStreetAddress(text)}
        />
        <AddressField
          inputLabel={"Floor or Apartment (Optional)"}
          inputValue={floorOrApartment}
          onChangeText={(text) => setFloorOrAprtment(text)}
        />
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
      </View>

      <CustomBottomButton
        label={"SAVE AND CONTINUE"}
        onPress={handleAddAddress}
      />
    </SafeAreaView>
  );
};

export default NewAddress;
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "white",
  },
});
