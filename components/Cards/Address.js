import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { windowWidth } from "../../utils/Dimension";
import { useDispatch } from "react-redux";
import { removeAddress } from "../../Redux/slices/UserAddressBook";

const Address = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const handleDeleteAddress = () => {
    const address = { addressId: item._id };
    dispatch(removeAddress(address));
  };

  return (
    <View>
      <View style={styles.addrContainer}>
        <View>
          <Ionicons
            name="ios-location-outline"
            size={20}
            color="#e38b37"
            style={{ marginRight: 20 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.addressHead}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.streetAddress}
            </Text>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.navigate("EditAddress", item)}
            >
              <SimpleLineIcons name="pencil" size={20} color="#e38b37" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={handleDeleteAddress}>
              <AntDesign name="delete" size={20} color="#e38b37" />
            </TouchableOpacity>
          </View>
          {item.floorOrApartment ? (
            <Text
              style={[styles.subAddr, { width: windowWidth * 0.8 }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.floorOrApartment}
            </Text>
          ): null}
          <Text style={styles.subAddr}>Postal Code: {item.postalCode}</Text>
          <Text style={styles.subAddr}>{item.city}</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  addrContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingBottom: 16,
  },
  icon: {
    paddingHorizontal: 5,
  },
  addressHead: {
    width: windowWidth * 0.65,
    fontWeight: "bold",
  },
  subAddr: {
    color: "#666",
  },
  separator: {
    borderWidth: 0.3,
    borderColor: "#6666",
    width: windowWidth * 0.8,
    marginHorizontal: 16,
    alignSelf: "center",
    marginBottom: 16,
  },
});
