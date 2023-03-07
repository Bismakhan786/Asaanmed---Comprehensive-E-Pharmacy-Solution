import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Favourite,
    MyProfile,
    MainLayout,
    UploadPrescription,
} from '../screens'
import {Ionicons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import TopNavigator from './TopNavigator';
import Header from '../components/Header/Header';
import { Linking } from 'react-native';
import { colors } from '../constants';
import { useDispatch } from 'react-redux';
import { getProductsFromAPI } from '../Redux/slices/ProductsSlice';
import { getAllCategories } from '../Redux/slices/CategoriesSlice';
import { getFavouriteItems, getUserProfile } from '../Redux/slices/UserSlice';
import { getAllMyOrders } from '../Redux/slices/OrdersSlice';
import { getAddressBook } from '../Redux/slices/UserAddressBook';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    
    return(
        <TouchableOpacity
            onPress={onPress}
            style={{
                top:-30,
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#7e8090",
                borderRadius: 40
            }}
        >
            <View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 35,
                    backgroundColor: "#e7e7e7"
                }}
            >
                {children}
            </View>
    </TouchableOpacity>
    )
    
};

const TabNavigation = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsFromAPI())
        dispatch(getAllCategories())
        dispatch(getUserProfile())
        dispatch(getAllMyOrders())
        dispatch(getAddressBook())
        dispatch(getFavouriteItems())
    }, [dispatch])
    
    return(
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
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen 
                name="TabHome" 
                component={MainLayout} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                     <Ionicons name={focused ? "ios-home" : "ios-home-outline"} size={focused ? 28 : 18 } color={color} 
                     />
                    )
                }}
            />
            <Tab.Screen 
                name="AllCategories" 
                component={TopNavigator} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                     <Ionicons name={focused ? "ios-grid" : "ios-grid-outline"} size={focused ? 28 : 18 } color={color} />
                    ),
                    headerShown: true,
                    header: ({navigation}) => <Header 
                        navigation={navigation} 
                        label={"Categories"}
                        showLabel={true}
                        showSearchIcon={true}
                        showNotificationIcon={true}
                        showCartIcon={true}
                        showSearchBar={true}
                    />
                }}
            />

            {/* <Tab.Screen 
                name="UploadPrescription" 
                component={UploadPrescription} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                     <AntDesign name="plus" size={focused ? 26 : 28 } color={color}  />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                    
                }}
                
            /> */}
            <Tab.Screen 
                name="Favourite" 
                component={Favourite} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                     <Ionicons name={focused ? "heart-sharp" : "heart-outline"} size={focused ? 28 : 18 } color={color} />
                    )
                    
                }}
            />
            <Tab.Screen 
                name="MyProfile" 
                component={MyProfile} 
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? "ios-person" : "person-outline"} size={focused ? 28 : 18 } color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


export default TabNavigation;