import React, { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { clearCancelOrderError, clearCancelOrderSuccess, getAllMyOrders } from "../Redux/slices/OrdersSlice";
import RenderOrders from "../screens/Orders/RenderOrders";
import Loading from "../components/Loader/Loading";
import { colors } from "../constants";
import BarLoader from "../components/BarLoader/BarLoader";


const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();


const BottomTabOrdersNavigator = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    loadingMyOrders,
    myOrders,
    cancelOrderError,
    cancelOrderSuccess,
  } = useSelector((state) => state.orders);

  useFocusEffect(
    useCallback(() => {
      // dispatch(getAllMyOrders());
      if (cancelOrderSuccess) {
       
        dispatch(clearCancelOrderSuccess());
      }
      if (cancelOrderError) {
        
        dispatch(clearCancelOrderError());
      }
      
    }, [dispatch, cancelOrderError, cancelOrderSuccess])
  );

  let cancelled = [];
  let delivered = [];
  let upcoming = [];
  myOrders &&
    myOrders.map((o, i) => {
      if (o.orderStatus === "Processing" || o.orderStatus === "Shipped") {
        upcoming.push(o);
      }
      if (o.orderStatus === "Delivered") {
        delivered.push(o);
      }
      if (o.orderStatus === "Cancelled") {
        cancelled.push(o);
      }
    });

    
  return (
    <>
      {loadingMyOrders ? (
        <BarLoader />
      ) : (
        <Tab.Navigator
        
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: colors.black,
              height: 50,
                    position: 'absolute',
                    elevation: 6,
                    bottom: 5,
                    left: 8,
                    right: 8,
                    borderRadius: 15,
                    borderWidth: 1.5,
                    borderColor: colors.darkGray
            },
            tabBarInactiveTintColor: colors.darkGray,
            tabBarActiveTintColor: colors.orange,
            tabBarHideOnKeyboard: true,
          }}
          
        >
          <Tab.Screen
            name={"Upcoming"}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "truck-check" : "truck-check-outline"}
                  size={focused ? 28 : 20}
                  color={color}
                />
              ),
            }}
            children={() => (
              <RenderOrders
                data={upcoming.reverse()}
                orderType={"Upcoming"}
                navigation={navigation}
              />
            )}
          />
          <Tab.Screen
            name={"Delivered"}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons
                  name={
                    focused
                      ? "checkbox-multiple-marked-circle"
                      : "checkbox-multiple-marked-circle-outline"
                  }
                  size={focused ? 28 : 20}
                  color={color}
                />
              ),
            }}
            children={() => (
              <RenderOrders
                data={delivered.reverse()}
                orderType={"Delivered"}
                navigation={navigation}
              />
            )}
          />
          <Tab.Screen
            name={"Cancelled"}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "archive-cancel" : "archive-cancel-outline"}
                  size={focused ? 28 : 20}
                  color={color}
                />
              ),
            }}
            children={() => (
              <RenderOrders
                data={cancelled.reverse()}
                orderType={"Cancelled"}
                navigation={navigation}
              />
            )}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default BottomTabOrdersNavigator;
