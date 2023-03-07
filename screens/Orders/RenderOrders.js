import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { windowHeight, } from "../../utils/Dimension";
import Toast from "react-native-toast-message";
import NewOrderItem from "../../components/Cards/NewOrderItem";

const RenderOrders = ({ navigation, data, orderType }) => {
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            marginHorizontal: 16,
            fontWeight: "bold",
            letterSpacing: 0.5,
            textAlign: "center",
            marginTop: 14,
          }}
        >
          {orderType} Orders
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <NewOrderItem
              item={item}
              orderType={orderType}
              navigation={navigation}
            />
          )}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View
              style={{
                height: windowHeight * 0.75,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>No {orderType}..</Text>
            </View>
          }
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 60
          }}
          />
          <Toast/>
      </SafeAreaView>
    </>
  );
};

export default RenderOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  date: {
    fontSize: 14,
    color: "#6666",
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 30,
  },
  topButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  btnfocused: {
    width: "48%",
    backgroundColor: "#e38b37",
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxtFocused: {
    color: "whitesmoke",
    fontSize: 14,
    fontWeight: "500",
  },
  btn: {
    width: "48%",
    backgroundColor: "#ffdfc1",
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "#e38b37",
    fontSize: 14,
    fontWeight: "500",
  },
});
