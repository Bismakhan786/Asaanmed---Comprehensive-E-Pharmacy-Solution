import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { colors } from "../constants";
import Loading from "../components/Loader/Loading";
import BarLoader from "../components/BarLoader/BarLoader";

const SearchScreen = ({ navigation }) => {
  const { loadingProducts, products } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProduct] = useState(products);

  const RenderProduct = ({ item }) => {
    return (
      <View
        style={{
          paddingHorizontal: 14,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductDetails", item)}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            paddingVertical: 16,
            marginVertical: 8,
            paddingHorizontal: 4,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}
        >
          <View style={{position: 'absolute', right: 0, top: 0, justifyContent: 'center', alignItems: 'center', backgroundColor:'green', borderTopRightRadius: 10, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 5}}>
            <Text style={{color: 'white'}}>{item.offer}%</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.image[0].url }}
              style={{
                width: 50,
                height: 50,
                marginRight: 8,
                resizeMode: "contain",
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16, textTransform: 'capitalize', marginBottom: 5 }}>
                {item.name}
              </Text>
              <Text style={{ color: item.cat.color, textTransform: 'uppercase', marginBottom: 5 }}>{item.cat.name}</Text>
              <Text style={{fontSize: 11}}>PKR. <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.price}</Text></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: colors.orange,
            paddingTop: 40,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              backgroundColor: "white",
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
              selectionColor={"#e38b37"}
              onChangeText={(text) =>
                setFilteredProduct(
                  products.filter((p) =>
                    p.name.toLowerCase().includes(text.trim().toLowerCase())
                  )
                )
              }
              autoFocus
              style={{
                flex: 1,
              }}
            />
          </View>
        </View>
        {loadingProducts ? (
          <BarLoader />
        ) : (
          <FlatList
            data={filteredProducts}
            renderItem={({ item, index }) => (
              <RenderProduct item={item} key={index} />
            )}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: "white",
  },
});
