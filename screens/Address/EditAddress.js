import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddressField from "../../components/Fields/AddressField";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import Header from "../../components/Header/Header";
import { windowHeight } from "../../utils/Dimension";
import { updateAddress } from "../../Redux/slices/UserAddressBook";
import { useDispatch } from "react-redux";

const EditAddress = ({ navigation, route }) => {
  const address = route.params;

  const dispatch = useDispatch()
  const [streetAddress, setStreetAddress] = useState(address.streetAddress);
  const [floorOrApartment, setFloorOrAprtment] = useState(
    address.floorOrApartment
  );
  const [city, setCity] = useState(address.city);
  const [postalCode, setPostalCode] = useState(address.postalCode);

  const handleUpdateAddress = () => {
    const newAddress = {
      addressId: address._id,
      streetAddress,
      floorOrApartment,
      city,
      postalCode,
    };
    dispatch(updateAddress(newAddress));
    navigation.navigate("AddressBook");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        label={"Edit your address"}
        showLabel={true}
        showBackIcon={true}
      />
      <View style={{paddingTop: 20}}>

      <AddressField
        inputLabel={"Street Address"}
        inputValue={streetAddress}
        onChangeText={(text) => setStreetAddress(text)}
      />
      {address.floorOrApartment ? (
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
      </View>

      <CustomBottomButton label={"SAVE AND CONTINUE"} onPress={handleUpdateAddress}/>
    </SafeAreaView>
  );
};

export default EditAddress;
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "white",
  },
});
