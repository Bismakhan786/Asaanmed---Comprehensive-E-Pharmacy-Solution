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

const OTPauth = ({ navigation }) => {
  const defaultCountdown = 60;
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);
  const [enableSendOTP, setEnableSendOTP] = useState(true);
  const [editNumber, setEditNumber] = useState(true);
  const [error, setError] = useState(null);
  let clockCall = null;

  useEffect(() => {
    if (!enableSendOTP) {
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }

    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);

      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  // Function to be called when requesting for a verification code
  const sendVerification = () => {
    if (phoneNumber.length !== 10) {
      setError("Enter a valid phone number!");
    } else {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber("+92"+phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
      setEditNumber(false);
      setEnableSendOTP(false);
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  // Function to be called when confirming the verification code that we received
  // from Firebase via SMS
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
        setCode("");
        Alert.alert("Verification Successful");
        navigation.navigate("EnterName", {phoneNumber: "0" + phoneNumber})
      })
      .catch((err) => alert(err));
  };

  const onResendOTP = () => {
    if (enableResend) {
      setCode("");
      sendVerification();
    }
  };

  const onChangePhoneNumber = (number) => {
    setPhoneNumber(number);
    setError(null);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header
        label={"OTP Verification"}
        showLabel={true}
        labelStyle={{ width: "80%" }}
        
      />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={styles.subContainer}>
        {enableSendOTP ? (
          <>
            <Text style={styles.txtTitle}>
              {"Please input your mobile phone number"}
            </Text>
            <View style={styles.containerInput}>
              <View style={styles.openDialogView}>
                <Text>{"+92 |"}</Text>
                <TextInput
                  autoFocus
                  editable={editNumber}
                  maxLength={10}
                  style={styles.phoneInputStyle}
                  placeholder="334 2108399"
                  keyboardType="numeric"
                  returnKeyType="done"
                  autoCompleteType="tel"
                  value={phoneNumber}
                  onChangeText={onChangePhoneNumber}
                  secureTextEntry={false}
                  selectionColor={colors.orange}
                />
              </View>
            </View>
            <Text style={styles.errorMsg}>{error}</Text>

            <TouchableOpacity
              onPress={sendVerification}
              style={[
                styles.sendVerificationBtn,
                (phoneNumber || enableResend) && {
                  backgroundColor: colors.orange,
                },
              ]}
              disabled={phoneNumber || enableResend ? false : true}
            >
              <Text style={styles.sendVerificationTxt}>
                Send Verification Code
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.txtTitle}>{"Enter OTP Code sent via SMS"}</Text>
            <View style={styles.inputOTPcontainer}>
              <TextInput
                maxLength={6}
                autoFocus
                clearTextOnFocus
                style={[styles.phoneInputStyle, { textAlign: "center" }]}
                keyboardType="numeric"
                returnKeyType="done"
                autoCompleteType="tel"
                value={code}
                onChangeText={setCode}
                secureTextEntry={false}
                selectionColor={colors.orange}
              />
            </View>

            <TouchableOpacity
              onPress={confirmCode}
              style={[
                styles.sendVerificationBtn,
                (code.length === 6) && {
                  backgroundColor: colors.orange,
                },
              ]}
              disabled={code.length === 6 ? false : true}
            >
              <Text style={styles.sendVerificationTxt}>
                Continue
              </Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
              <TouchableOpacity
                style={styles.btnChangeContact}
                onPress={() => {
                  setEnableSendOTP(true);
                  setEditNumber(true);
                  setCode('')
                }}
              >
                <Text style={styles.textChangeContact}>Change Contact</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnResendOTP}
                onPress={onResendOTP}
              >
                <Text
                  style={[
                    styles.textResendOTP,
                    {
                      color: enableResend ? colors.orange : "gray",
                    },
                  ]}
                >
                  Resend OTP ({countdown})
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OTPauth;

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
