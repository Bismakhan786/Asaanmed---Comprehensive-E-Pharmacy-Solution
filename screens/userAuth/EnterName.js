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

const EnterName = ({ navigation, route }) => {
 

    const {phoneNumber} = route.params
  const [name, setName] = useState("");

  const continueProcedure = () => {
    
    if(!name){
        Alert.alert("Please provide your name!")
    }else{

        navigation.navigate("EnterAddress", {phoneNumber, name})
    }
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <Header
        label={"Enter Name"}
        showLabel={true}
        labelStyle={{ width: "80%" }}
        
      />
      
      <View style={styles.subContainer}>
      <Text style={styles.txtTitle}>
              {"Please Enter Your Name"}
            </Text>
            <View style={styles.containerInput}>
              <View style={styles.openDialogView}>
                <TextInput
                  autoFocus
                  style={styles.phoneInputStyle}
                  value={name}
                  onChangeText={setName}
                  selectionColor={colors.orange}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={continueProcedure}
              style={[
                styles.sendVerificationBtn,
                {
                  backgroundColor: colors.orange,
                },
              ]}
            >
              <Text style={styles.sendVerificationTxt}>
                Next
              </Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EnterName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center'
  },
  subContainer: {
    alignItems: "center",
  },
  errorMsg: {
    color: "red",
    marginTop: 8,
    fontSize: 12,
  },
  txtTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 15,
  },
  containerInput: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
  },
  openDialogView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
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
  inputOTPcontainer: {
    // backgroundColor: 'red',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottomWidth: 1.5,
    marginHorizontal: 16,
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
  },
  bottomView: {
    flexDirection: "row",
    // flex: 1,
    marginBottom: 50,
    alignItems: "flex-end",
  },
  btnChangeContact: {
    width: 150,
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 10,
  },
  textChangeContact: {
    color: colors.orange,
    textAlign: "center",
    fontSize: 15,
  },
  btnResendOTP: {
    width: 150,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 10,
  },
  textResendOTP: {
    textAlign: "center",
    fontSize: 15,
  },
});
