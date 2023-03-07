import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnBoardingScreen,
  ProductDetails,
  CartTab,
  Checkout,
  EditProfile,
  AddressBook,
  EditAddress,
  NewAddress,
  MyProfile,
  Reorder,
  Help,
  SearchScreen,
  OTPauth,
  EnterName,
  EnterAddress,
} from "../screens";
import BottomTabNavigation from "./BottomTabNavigation";
import BottomTabOrdersNavigator from "./BottomTabOrdersNavigator";
import Header from "../components/Header/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const MyStack = (props) => {
  console.log(props.onboarded);

  let checkOnboarding = null

  const isOnboarded = async () => {
    const onboardedNew = await AsyncStorage.getItem("ONBOARDED");
    checkOnboarding = JSON.parse(onboardedNew)
    
    console.log(checkOnboarding);
  };

  isOnboarded()

  return (
    <Stack.Navigator initialRouteName={(checkOnboarding === "false"||checkOnboarding === null) ? "OnBoarding" : "Home"}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPAuth"
        component={OTPauth}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EnterName"
        component={EnterName}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EnterAddress"
        component={EnterAddress}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />

      <Stack.Screen
        name="Reorder"
        component={Reorder}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Orders"
        component={BottomTabOrdersNavigator}
        options={{
          headerShown: true,
          animation: "slide_from_right",
          header: ({ navigation }) => (
            <Header
              navigation={navigation}
              label={"Orders"}
              showBackIcon={true}
              showLabel={true}
              showSearchIcon={true}
              showNotificationIcon={true}
              showCartIcon={true}
            />
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="EditAddress"
        component={EditAddress}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="NewAddress"
        component={NewAddress}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="AddressBook"
        component={AddressBook}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="MyCart"
        component={CartTab}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
