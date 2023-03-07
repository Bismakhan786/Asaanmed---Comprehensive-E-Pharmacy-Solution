import React, { useRef, useState, useEffect } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../config";
import Header from "../../components/Header/Header";
import { TextInput } from "react-native";
import { colors } from "../../constants";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/slices/UserSlice";

const EnterAddress = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { name, phoneNumber } = route.params;
  console.log(route.params);
  const [streetAddress, setStreetAddress] = useState("");
  const [floorOrApartment, setFloorOrApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    Location.reverseGeocodeAsync({
      latitude: mapRegion.latitude,
      longitude: mapRegion.longitude,
    })
      .then((result) => {
        let currentAddress = result[0];
        console.log(result);

        setStreetAddress(currentAddress.district);
        setCity(currentAddress.city);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    userLocation();
  }, []);

  const handleAddressSubmit = () => {
    if (!streetAddress) {
      Alert.alert("Please provide Street Address!");
    } else if (!floorOrApartment) {
      Alert.alert("Please provide Floor or Aprtment!");
    } else if (!city) {
      Alert.alert("Please provide City!");
    } else if (!postalCode) {
      Alert.alert("Please provide Postal Code!");
    } else {
      let address = {
        streetAddress,
        floorOrApartment,
        city,
        postalCode,
      };

      const userData = {
        name,
        contact: phoneNumber,
        addressBook: [address],
      };

      console.log(userData)
      dispatch(registerUser(userData))
      navigation.navigate("Home")
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        label={"Enter Location"}
        showLabel={true}
        labelStyle={{ width: "80%" }}
      />
      <MapView style={styles.map} region={mapRegion} showsUserLocation>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>

      <View style={styles.subContainer}>
        <View style={styles.containerInput}>
          <View style={styles.openDialogView}>
            <TextInput
              autoFocus
              style={styles.phoneInputStyle}
              placeholder={"Street"}
              value={streetAddress}
              onChangeText={setStreetAddress}
              selectionColor={colors.orange}
            />
          </View>
        </View>

        <View style={styles.containerInput}>
          <View style={styles.openDialogView}>
            <TextInput
              style={styles.phoneInputStyle}
              placeholder={"Floor or Apartment"}
              value={floorOrApartment}
              onChangeText={setFloorOrApartment}
              selectionColor={colors.orange}
            />
          </View>
        </View>

        <View style={styles.containerInput}>
          <View style={styles.openDialogView}>
            <TextInput
              style={styles.phoneInputStyle}
              placeholder={"City"}
              value={city}
              onChangeText={setCity}
              selectionColor={colors.orange}
            />
          </View>
        </View>

        <View style={styles.containerInput}>
          <View style={styles.openDialogView}>
            <TextInput
              style={styles.phoneInputStyle}
              placeholder={"Postal Code"}
              value={postalCode}
              onChangeText={setPostalCode}
              selectionColor={colors.orange}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleAddressSubmit}
          style={[
            styles.sendVerificationBtn,
            {
              backgroundColor: colors.orange,
            },
          ]}
        >
          <Text style={styles.sendVerificationTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EnterAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center'
  },
  subContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  txtTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 15,
  },
  containerInput: {
    marginVertical: 5,
    flexDirection: "row",
    paddingHorizontal: 12,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(0, 0, 0, 0.25)",
  },
  openDialogView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 35,
  },
  sendVerificationBtn: {
    backgroundColor: "gray",
    marginTop: 16,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    elevation: 6,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  sendVerificationTxt: {
    color: "white",
    fontSize: 15,
  },
  map: {
    width: "100%",
    height: "50%",
  },

  locationTxt: {
    position: "absolute",
    bottom: 10,
    left: "3%",
    right: "3%",
    backgroundColor: "white",
    color: colors.orange,
    padding: 12,
    margin: 8,
    fontWeight: "bold",
    fontSize: 12,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 6,
    textAlign: "center",
    borderColor: "rgba(0, 0, 0, 0.25)",
    textTransform: "capitalize",
  },
});
