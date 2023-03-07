import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Badge } from "react-native-paper";
import { connect } from "react-redux";
import { colors } from "../../constants";

const Header = (props) => {
  const cartCount = props.cartItems.length;
  const notiCount = 0;
  const { navigation } = props;

  const [displaySearch, setDisplaySearch] = useState(false);

  const displaySearchTrue = () => {
    if (displaySearch) {
      setDisplaySearch(false);
      return;
    }
    setDisplaySearch(true);
  };

  let mobileNumber = 3362108399;
  let whatsAppMsg = "Salam, We are facing an issue";

  const initiateWhatsAppSMS = () => {
    let url =
      "whatsapp://send?text=" + whatsAppMsg + "&phone=92" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return (
    <View
      style={{
        backgroundColor: colors.orange,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        zIndex: 100,
        height: props.showSearchBar ? 130 : 80,
      }}
    >
      <StatusBar
        barStyle={"light-content"}
        hidden={false}
        backgroundColor={colors.orange}
      />

      <View
        {...(props.label === "Categories"
          ? styles.CategoriesHeaderContainer
          : styles.headerContainer)}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {props.showlogo && (
            <View
              style={{
                paddingVertical: 1,
                paddingHorizontal: 3,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
              }}
            >
              <Image
                source={props.logo}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
            </View>
          )}
          {props.showBackIcon && (
            <TouchableOpacity
              onPress={() => {
                if (!props.goBackToScreen) {
                  props.navigation.goBack();
                } else {
                  props.navigation.navigate(props.screen);
                }
              }}
              style={styles.backIcon}
            >
              <Ionicons name="chevron-back-outline" size={22} color="white" />
            </TouchableOpacity>
          )}

          {props.showCrossIcon && (
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.backIcon}
            >
              <Entypo name="cross" size={22} color="white" />
            </TouchableOpacity>
          )}

          {/* Header Title */}

          {props.showLabel && (
            <Text
              style={[styles.headerTitle, props.labelStyle]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {props.label}
            </Text>
          )}
        </View>

        {/* Header Icons */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {/* {props.showSearchIcon === true && (
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchScreen")}
              style={styles.icon}
            >
              <Ionicons name="search-outline" size={22} color="white" />
            </TouchableOpacity>
          )} */}

          {/* {props.showNotificationIcon && (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Notifications")}
              style={styles.icon}
            >
              <Ionicons
                name="notifications-outline"
                size={22}
                color="white"
              />
              {notiCount !== 0 && (
                <Badge size={18} style={styles.badge}>
                  {notiCount}
                </Badge>
              )}
            </TouchableOpacity>
          )} */}
          <TouchableOpacity onPress={initiateWhatsAppSMS} style={styles.icon}>
            <Ionicons name="ios-logo-whatsapp" size={22} color="white" />
            {notiCount !== 0 && (
              <Badge size={18} style={styles.badge}>
                {notiCount}
              </Badge>
            )}
          </TouchableOpacity>

          {props.showCartIcon && (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MyCart")}
              style={styles.icon}
            >
              <Ionicons name="ios-cart-outline" size={22} color="white" />
              <Badge size={18} style={styles.badge}>
                {cartCount}
              </Badge>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {props.showSearchBar && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 15,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginHorizontal: 16,
            marginBottom: 16,
          }}
        >
          <Ionicons
            name="search"
            size={24}
            color="#6666"
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            placeholder="Search for medical products"
            onFocus={() => navigation.navigate("SearchScreen")}
            selectionColor={"#e38b37"}
            style={{
              flex: 1,
            }}
          />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer,
  };
};

export default connect(mapStateToProps, null)(Header);

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.orange,
    paddingHorizontal: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        
  },
  CategoriesHeaderContainer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.orange,
    paddingHorizontal: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#6666",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 8,
  },
  icon: {
    paddingHorizontal: 5,
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -5,
    backgroundColor: "white",
    color: colors.black,
    fontWeight: "bold",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
  },
  backIcon: {
    paddingRight: 5,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    width: "60%",
  },
});
