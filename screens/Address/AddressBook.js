import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CustomBottomButton from "../../components/Button/CustomBottomButton";
import Header from "../../components/Header/Header";
import Address from "../../components/Cards/Address";
import { dummyData } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getAddressBook } from "../../Redux/slices/UserAddressBook";
import Loading from "../../components/Loader/Loading";
import BarLoader from "../../components/BarLoader/BarLoader"

const AddressBook = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loadingAddressBook, addressBook, errorAddressBook } = useSelector(
    (state) => state.addressBook
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getAddressBook());
    }, [dispatch])
  );

  return (
    <>
      <Header
        navigation={navigation}
        label={"Address Book"}
        showLabel={true}
        showBackIcon={true}
      />
      {loadingAddressBook ? (
        <BarLoader />
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={addressBook}
            renderItem={({ item }) => (
              <Address item={item} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            contentContainerStyle={{ paddingTop: 30, paddingBottom: 40 }}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  width: "85%",
                  fontWeight: "bold",
                }}
              >
                Select Add New Address to continue...
              </Text>
            }
          />

          <CustomBottomButton
            label={"ADD NEW ADDRESS"}
            onPress={() => navigation.navigate("NewAddress")}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default AddressBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
