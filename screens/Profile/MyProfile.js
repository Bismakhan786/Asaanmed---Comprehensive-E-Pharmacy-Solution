import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import ProfileOption from "../../components/Cards/ProfileOption";
import { Ionicons } from "@expo/vector-icons";
import { colors, dummyData } from "../../constants";
import { windowHeight, windowWidth } from "../../utils/Dimension";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import {
  clearLogoutErrors,
  clearSuccess,
  getUserProfile,
} from "../../Redux/slices/UserSlice";
import Loading from "../../components/Loader/Loading";
import Toast from "react-native-toast-message";
import { API_URL } from "../../common/config";
import { TextInput } from "react-native-paper";
import BarLoader from "../../components/BarLoader/BarLoader";

const MyProfile = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const {
    getProfileSuccess,
    loadingGetProfile,
    errorGetProfile,
    user,
  } = useSelector((state) => state.user);

  
  const toastId = useRef(null);

  useFocusEffect(
    useCallback(() => {
      // console.log(user, "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      // dispatch(getUserProfile());
      // if (success) {
      //   Toast.show({ type: "success", text1: "Logged out successfully!" });
      //   dispatch(clearSuccess());
      // }
      // if (errorLogout) {
      //   Toast.show({
      //     type: "error",
      //     text1: "Log out fail!",
      //     text2: errorLogout,
      //   });
      //   dispatch(clearLogoutErrors());
      // }
    }, [dispatch])
  );


  function getAvatarText(name) {
    let avatarText = "";
    if (name.split(" ").length > 1) {
      name.split(" ").map((n) => {
        avatarText += n[0];
      });
    } else {
      avatarText = name.slice(0, 2).toUpperCase();
    }
    return avatarText;
  }

  return (
    <>

      <SafeAreaView style={styles.container}>
        <Header
          navigation={navigation}
          label={"Profile"}
          showLabel={true}
          showNotificationIcon={true}
          showCartIcon={true}
          showSearchBar={true}
        />

        {loadingGetProfile ? (
          <BarLoader />
        ) : (
          <>
            {/* Profile Container */}
            <View style={styles.profileContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={styles.editProfile}
              >
                <MaterialCommunityIcons
                  name="account-edit-outline"
                  size={28}
                  color="#e38b37"
                />
              </TouchableOpacity>
              <Text style={styles.textAvatar}>
                  {getAvatarText(user?.name)}
                </Text>

              <Text style={styles.title}>{user?.name}</Text>

              <Text style={styles.gmail}>{user?.contact}</Text>
            </View>
            {/* Options */}
            <View
              style={{
                paddingBottom: windowHeight / 6,
              }}
            >
              <ProfileOption
                icon={
                  <Feather
                    name="shopping-bag"
                    size={20}
                    color="#e38b37"
                    style={{ marginRight: 15 }}
                  />
                }
                title="My Orders"
                onPress={() =>
                  navigation.navigate({
                    name: "Orders",
                    path: { caller: "MyProfile" },
                  })
                }
              />

              <ProfileOption
                icon={
                  <Ionicons
                    name="ios-location-outline"
                    size={20}
                    color="#e38b37"
                    style={{ marginRight: 15 }}
                  />
                }
                title="Address Book"
                onPress={() => navigation.navigate("AddressBook")}
              />
              
              <ProfileOption
                icon={
                  <Ionicons
                    name="ios-help-circle-outline"
                    size={20}
                    color="#e38b37"
                    style={{ marginRight: 15 }}
                  />
                }
                title="Help"
                onPress={() => navigation.navigate("Help")}
              />

              
            </View>
          </>
        ) }
      </SafeAreaView>
    </>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textAvatar: {
    fontSize: 20,
    padding: 16,
    borderRadius: 40,
    backgroundColor: colors.orange,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 16,
    elevation: 6
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 40,
    marginBottom: 16,
  },
  title: {
    color: "#666",
    fontWeight: "500",
    fontSize: 18,
  },
  gmail: {
    color: "#e38b37",
    letterSpacing: 1,
  },
  profileContainer: {
    height: windowHeight / 2.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  editProfile: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    right: 0,
    marginRight: 16,
  },
  emptyProfile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyProfileMsg: {
    padding: 10,
  },
  emptyProfileMsgTxt: {
    color: colors.darkGray,
    fontSize: 18,
  },
});
