import React, { useCallback,  useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";
import Header from "../../components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import InputField from "../../components/Fields/InputField";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import { windowHeight } from "../../utils/Dimension";
import { useDispatch, useSelector } from "react-redux";
import { clearUpdateProfileError, clearUpdateProfileSuccess, updateUserProfile } from "../../Redux/slices/UserSlice";
import BarLoader from "../../components/BarLoader/BarLoader";
import ErrorTooltip from "../../components/ErrorTooltip/ErrorTooltip";
import { useFocusEffect } from "@react-navigation/native";

const EditProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    loadingUpdateProfile,
    errorUpdateProfile,
    updateProfileSucces,
    user,
  } = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [contact, setContact] = useState(user?.contact);


  useFocusEffect(
    useCallback(() => {
      if (updateProfileSucces) {
        setTimeout(() => {
          dispatch(clearUpdateProfileSuccess());
        }, 1500);
      }
      if (errorUpdateProfile) {
  
        setTimeout(() => {
          dispatch(clearUpdateProfileError());
        }, 1500);
  
      }
      
    }, [dispatch, errorUpdateProfile, updateProfileSucces])
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

  const handleUpdate = () => {
    const userData = {
      name,
      contact,
    };

    dispatch(updateUserProfile(userData));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        label={"Edit Profile"}
        showLabel={true}
        showCrossIcon={true}
      />
      {errorUpdateProfile && <ErrorTooltip error={errorUpdateProfile} />}

      {updateProfileSucces && (
        <ErrorTooltip error={"Profile Updated Successfully"} />
      )}

      {loadingUpdateProfile && <BarLoader />}
      {/* Profile Container */}
      <View style={styles.profileContainer}>
        <Text style={styles.textAvatar}>{getAvatarText(user?.name)}</Text>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.gmail}>{contact}</Text>
      </View>

      {/* Options */}
      <View
        style={{
          height: "50%",
          paddingHorizontal: 20,
        }}
      >
        <InputField
          label={"Username"}
          value={name}
          selectTextOnFocus={true}
          onChangeText={setName}
          icon={
            <Ionicons
              name="person-outline"
              size={24}
              color="#6666"
              style={{ marginRight: 8 }}
            />
          }
        />

        <InputField
          label={"Contact"}
          value={contact}
          selectTextOnFocus={true}
          onChangeText={setContact}
          icon={
            <MaterialIcons
              name="local-phone"
              size={24}
              color="#6666"
              style={{ marginRight: 8 }}
            />
          }
          keyboardType="numeric"
        />
      </View>
      <CustomBottomButton label={"UPDATE"} onPress={handleUpdate} />
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "white",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 40,
    marginBottom: 15,
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
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
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
    elevation: 6,
  },
  chngPassword: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginHorizontal: 10,
  },
});
