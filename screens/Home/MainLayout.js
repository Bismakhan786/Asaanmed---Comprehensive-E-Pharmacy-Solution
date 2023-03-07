import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  BackHandler,
  Button,
} from "react-native";

import { windowHeight } from "../../utils/Dimension";
import Header from "../../components/Header/Header";
import {
  bh,
  bosch,
  abbott,
  atco,
  hilton,
  searle,
  martin,
} from "../../assets/companiesLogo";
import { colors } from "../../constants";

const MainLayout = ({ navigation }) => {


  const backButtonPressed = () => {
    BackHandler.exitApp()
  }

  useEffect(() => {

    BackHandler.addEventListener("hardwareBackPress", backButtonPressed)
    return () => BackHandler.removeEventListener("hardwareBackPress", backButtonPressed)
  }, [])

  const companies = [atco, bh, bosch, abbott, martin, hilton, searle];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          navigation={navigation}
          logo={require("../../assets/images/am-final.png")}
          showlogo={true}
          showNotificationIcon={true}
          showCartIcon={true}
          showSearchBar={true}
        />


        {/* Cards Sections */}

        <View style={{ paddingVertical: 20 }}>
         
        

          <TouchableOpacity
            onPress={() => navigation.navigate("AllCategories")}
            style={{
              height: windowHeight / 5,
              backgroundColor: "white",
              borderRadius: 20,
              marginHorizontal: 14,
              marginTop: 10,
              elevation: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#51868e",
                // color: "#ab5943",
                marginTop: 16,
                marginHorizontal: 16,
                width: "60%",
              }}
            >
              Shop Now
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#666",
                width: "60%",
                marginTop: 5,
                marginHorizontal: 16,
              }}
            >
              All medicines that you need to be healthy and disease free
            </Text>
            <Image
              source={require("../../assets/images/home/Cat.png")}
              style={{
                position: "absolute",
                opacity: 0.7,
                bottom: 15,
                right: 0,
                height: "40%",
                width: "50%",
                resizeMode: "contain",
                transform: [{ rotate: "180deg" }],
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled
            style={{
              height: windowHeight / 5,
              backgroundColor: "white",
              borderRadius: 20,
              marginHorizontal: 14,
              marginTop: 10,
              elevation: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#ab5943",
                marginTop: 16,
                marginHorizontal: 16,
                width: "60%",
              }}
            >
              87 Companies
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#666",
                width: "60%",
                marginTop: 5,
                marginHorizontal: 16,
              }}
            >
              Dealing with 87 companies all over KARACHI
            </Text>
            <Image
              source={require("../../assets/images/home/Prescription.png")}
              style={{
                position: "absolute",
                opacity: 0.7,
                bottom: 15,
                right: 0,
                height: "60%",
                width: "40%",
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
                
          <View style={{ marginTop: 30, marginHorizontal: 16, }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                paddingBottom: 8,
                borderBottomWidth: 1.5,
                borderBottomColor: colors.orange,
                borderRadius: 100
              }}
            >
              Products From
            </Text>
            
            <FlatList
              data={companies}
              renderItem={({ item, index }) => (
                <View style={styles.compLogo}>
                  <Image
                    source={item}
                    key={index}
                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                  />
                </View>
              )}
              horizontal
              // numColumns={2}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                // marginHorizontal: "4%",
                paddingTop: 12,
                paddingBottom: 12,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {},
  compLogo: {
    // paddingHorizontal: 10,
    paddingHorizontal: 10,
    alignItems: 'center'
  }
});
