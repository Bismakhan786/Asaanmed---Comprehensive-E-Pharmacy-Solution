import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header/Header";
import { connect, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slices/CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addToFav, removeFromFav } from "../../Redux/slices/FavouritesSlicer";
import { windowHeight, windowWidth } from "../../utils/Dimension";
import { colors } from "../../constants";
import { addFavItem } from "../../Redux/slices/UserSlice";
import ErrorTooltip from "../../components/ErrorTooltip/ErrorTooltip";

const ProductDetails = (props) => {

  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(false)
    }, 2000);
  }, [showTooltip])

  const dispatch = useDispatch();
  const product = props.route.params;
  console.log(product);
  const [count, setCount] = useState(1);
  let totalPrice = product.price * count;
  let priceAfterDiscount =
    product.price - product.price * (product.offer / 100);
  let totalPriceAfterDiscount = priceAfterDiscount * count;

  const increaseCount = () => {
    setCount(count + 1);
    totalPrice = product.price * (count + 1);
    totalPriceAfterDiscount = priceAfterDiscount * (count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      totalPrice = product.price * (count - 1);
      totalPriceAfterDiscount = priceAfterDiscount = count - 1;
    }
  };

  let qty = count;

  const [addToFavIcon, setAddToFavIcon] = useState("heart-outline");

  const AddToFav = (favProduct) => () => {
    if (addToFavIcon === "heart-sharp") {
      setAddToFavIcon("heart-outline");
    } else {
      setAddToFavIcon("heart-sharp");
      props.addToFavList(favProduct);
    }
  };

  const handleAddToFav = () => {
    const newProduct = { productId: product._id };
    console.log(newProduct);
    dispatch(addFavItem(newProduct));
    props.navigation.navigate("Favourite");
  };
  return (
    <>
    {showTooltip && (
      <ErrorTooltip error={"Item added to cart 🤩"}/>
    )}
      <SafeAreaView style={styles.container}>
        <Header
          navigation={props.navigation}
          label={product.name}
          showLabel={true}
          labelStyle={{ textTransform: "uppercase" }}
          showBackIcon={true}
          showCartIcon={true}
        />
        <ScrollView style={{ paddingTop: 20 }}>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={handleAddToFav}
              style={styles.addToFavIcon}
            >
              <Ionicons name="heart-outline" size={24} color="#e38b37" />
            </TouchableOpacity>

            <Image
              source={{ uri: product.image[0].url }}
              style={styles.image}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
                marginLeft: 15,
              }}
            >
              <View
                style={{
                  flex: 0.7,
                }}
              >
                <Text style={styles.title}>{product.name.toUpperCase()}</Text>
                {/* <Text style={[styles.category, { color: colors.darkGray }]}>
                  {"abbott Pharma".toUpperCase()}
                </Text> */}
                <Text style={[styles.category, { color: product.cat.color }]}>
                  {product.cat?.name?.toUpperCase()}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.3,
                  
                }}
              >
                <Text style={[styles.price, { fontSize: 10 }]}>
                  PKR. <Text style={{ fontSize: 16 }}>{product.price}</Text>
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "red",
                    textDecorationLine: "line-through",
                  }}
                >
                  PKR. {product.price - product.price * (product.offer / 100)}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 15,
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.subTitle}>Offer</Text>
                <Text style={styles.subDesc}>{product.offer}%</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.subTitle}>Code</Text>
                <Text style={styles.subDesc}>{product.code}</Text>
              </View>
              {/* <View style={{ marginBottom: 10 }}>
                <Text style={styles.subTitle}>Bonus/Net</Text>
                <Text style={styles.subDesc}>{product.desc}</Text>
              </View> */}
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.subTitle}>Description</Text>
                <Text style={[styles.subDesc, { borderBottomWidth: 0 }]}>
                  {product.desc}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "white",
            width: windowWidth,
            padding: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.qtySetterButton}>
              <TouchableOpacity onPress={decreaseCount}>
                <AntDesign
                  name="minus"
                  size={24}
                  color="#7e8090"
                  style={styles.qtyIcon}
                />
              </TouchableOpacity>
              <Text style={styles.qtyCount}>{count}</Text>
              <TouchableOpacity onPress={increaseCount}>
                <AntDesign
                  name="plus"
                  size={24}
                  color="#7e8090"
                  style={styles.qtyIcon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.addItemToCart(
                  nanoid(),
                  qty,
                  product,
                  priceAfterDiscount,
                  totalPrice,
                  totalPriceAfterDiscount
                );
                setShowTooltip(true)
                // props.navigation.navigate("MyCart")
              }}
              style={styles.addToCartBtn}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                ADD TO CART
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (
      id,
      qty,
      product,
      priceAfterDiscount,
      totalPrice,
      totalPriceAfterDiscount
    ) => {
      dispatch(
        addToCart({
          id,
          qty,
          product,
          priceAfterDiscount,
          totalPrice,
          totalPriceAfterDiscount,
        })
      );
    },
    addToFavList: (id, item) => {
      dispatch(addToFav({ favId: id, item }));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: windowHeight,
    backgroundColor: "white",
  },
  image: {
    // height: "100%",
    height: 200,
    resizeMode: "contain",
  },
  imageContainer: {
    // height: "40%",
    // height: windowHeight * 0.35,
    marginBottom: 5,
    padding: 20,
  },
  addToFavIcon: {
    position: "absolute",
    width: "10%",
    // height: "12%",
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    borderRadius: 40,
    padding: 3,
  },
  detailsContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.025)",
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: 12,
    marginBottom: windowHeight * 0.1,
    sshadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    paddingVertical: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    backgroundColor: "#7e8090",
    paddingVertical: 10,
    paddingLeft: 20,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  category: {
    color: "red",
    fontSize: 14,
    fontWeight: "500",
    paddingVertical: 2,
  },
  qtySetterButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 3,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    marginRight: 10,
  },
  qtyCount: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  qtyIcon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  addToCartBtn: {
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },

  subTitle: {
    fontWeight: "500",
    marginBottom: 6,
    fontSize: 15,
    paddingBottom: 8,
    textTransform: "uppercase",
  },
  subDesc: {
    fontSize: 14,
    marginBottom: 6,
    paddingBottom: 8,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.gray,
  },
});
