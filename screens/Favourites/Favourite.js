import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  Image,
} from "react-native";

import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import FavProduct from "../../components/Cards/FavProducts";
import CustomButton from "../../components/Button/CustomButton";
import BarLoader from "../../components/BarLoader/BarLoader";

const Favourite = (props) => {

  const { loadingFavItems, favouriteItems, errorFavItems } = useSelector(
    (state) => state.user
  );

  // console.log(favouriteItems)
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          navigation={props.navigation}
          label={"Favourites"}
          showLabel={true}
          showSearchIcon={true}
          showNotificationIcon={true}
          showCartIcon={true}
          showSearchBar={true}
        />
        {loadingFavItems ? (
          <BarLoader />
        ) : favouriteItems.length > 0 ? (
          <FlatList
            data={favouriteItems.slice().reverse()}
            renderItem={({ item }) => (
              <FavProduct item={item} navigation={props.navigation} />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: "4%",
              paddingTop: "10%",
              paddingBottom: "20%",
            }}
          />
        ) : (
          <View style={styles.emptyFav}>
            <Image
              source={require("../../assets/images/emptyFavList.png")}
              style={{
                width: 300,
                height: 300,
                resizeMode: "contain",
              }}
            />
            <Text style={styles.txt1}>
              Don't you have any favourite medicines?
            </Text>
            <Text style={styles.txt2}>
              Explore shop to find your favourites...{" "}
            </Text>
            <CustomButton
              label={"EXPLORE PHARMACY"}
              onPressFunction={() => props.navigation.navigate("AllCategories")}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     favItems: state.favReducer,
//   };
// };

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  emptyFav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    backgroundColor: "white",
  },
  txt1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    textAlign: "center",
    marginBottom: 4,
  },
  txt2: {
    color: "#6666",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 16,
  },
});
