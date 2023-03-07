import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Modal,
  StatusBar,
} from "react-native";
import CustomCheckbox from "../../components/Checkbox/CustomCheckBox";

import Product from "../../components/Cards/Product";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const rating = [1, 2, 3, 4, 5];

const RenderCategory = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const [filteredData, setFilteredData] = useState(props.data)

  const RenderRating = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderWidth: 0.3,
          borderColor: "whitesmoke",
          padding: 10,
          borderRadius: 5,
          backgroundColor: "whitesmoke",
          marginRight: 8,
        }}
      >
        <Text style={{ marginRight: 3, fontWeight: "bold", color: "#666" }}>
          {item}
        </Text>
        <AntDesign name="star" size={18} color="#6666" />
      </TouchableOpacity>
    );
  };

  const sortOption = [
    'Newest to Oldest',
    'Oldest to Newest',
    'Price Low to High',
    'Price High to Low'
  ]

  const handleSortAndFilter = () => {

    console.log(rating)
    setModalVisible(false)
    setFilteredData(props.data.filter(p => p.ratings <= rating))
  }
  const handleClear = () => {

    setModalVisible(false)
    setFilteredData(props.data)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 8,
        }}
      >
        <TouchableOpacity
          style={styles.sortAndFilter}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontWeight: "bold", marginRight: 8 }}>
            Sort & Filter
          </Text>
          <MaterialIcons name="sort" size={24} color="black" />
        </TouchableOpacity>
      </View> */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            barStyle={"dark-content"}
            hidden={false}
            backgroundColor="#6666"
          />
          <View style={styles.modal}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Filter Your Search
              </Text>
              <TouchableOpacity
                style={styles.cancelModal}
                onPress={() => setModalVisible(false)}
              >
                <Entypo name="cross" size={20} color="#666" />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
                Rating
              </Text>
                <Rating
                  imageSize={25}
                  startingValue={0}
                  onFinishRating={(r) => setRating(r)}
                />
            </View>
            <View
              style={{
                width: "90%",
                borderWidth: 0.3,
                borderColor: "#6666",
                alignSelf: "center",
                marginVertical: 16,
              }}
            ></View>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sort Your Search
              </Text>
              <View style={{ marginLeft: 5, marginTop: 5 }}>
                {sortOption.map((o, i) => (
                  <CustomCheckbox label={o} key={i}/>
                ))}
              </View>
            </View>

            <View style={styles.bottomButtons}>
              <TouchableOpacity style={styles.applyBtn} onPress={handleSortAndFilter}>
                <Text style={styles.applyBtnTxt}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clearBtn} onPress={handleClear}>
                <Text style={styles.clearBtnTxt}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
      <FlatList
        data={filteredData}
        renderItem={({ item, index }) => (
          <Product
            item={item}
            key={index}
            onPress={() => props.navigation.navigate("ProductDetails", item)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          marginHorizontal: 16,
          marginTop: 8,
        }}
      />
    </SafeAreaView>
  );
};

export default RenderCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  sortAndFilter: {
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#6666",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modal: {
    height: "60%",
    width: "100%",
    padding: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cancelModal: {
    padding: 3,
    borderWidth: 0.3,
    borderColor: "#666",
    borderRadius: 5,
  },
  bottomButtons: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  applyBtn: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e37e38",
    padding: 10,
    borderRadius: 10,
  },
  clearBtn: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderColor: "#e37e38",
    borderWidth: 1,
  },
  applyBtnTxt: {
    color: "white",
    fontWeight: "bold",
  },
  clearBtnTxt: {
    color: "#e37e38",
    fontWeight: "bold",
  },
});
