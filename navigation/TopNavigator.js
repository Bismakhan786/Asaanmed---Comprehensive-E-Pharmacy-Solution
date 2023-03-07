import React, { useCallback, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {RenderCategory} from '../screens'
import { useDispatch, useSelector } from "react-redux";
import { getProductsFromAPI } from "../Redux/slices/ProductsSlice";
import { View, Text } from "react-native";
import { getAllCategories } from "../Redux/slices/CategoriesSlice";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../components/Loader/Loading";
import BarLoader from "../components/BarLoader/BarLoader";

const Tab = createMaterialTopTabNavigator();

const TopNavigator = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loadingProducts, products } = useSelector((state) => state.products);
  const { loadingCategories, categories, errorLoadingCategories } = useSelector(
    (state) => state.categories
  );

  console.log(products, categories)

  return (
    <>
      {loadingProducts || loadingCategories ? (
        <BarLoader/>
      ) : (
        <Tab.Navigator
          initialRouteName="Tablets"
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
            tabBarIndicatorStyle: { backgroundColor: "#e38b37" },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: {
              backgroundColor: "white",
            },
            tabBarActiveTintColor: "#666",
            tabBarInactiveTintColor: "#6666",
            tabBarPressColor: 'white',
            tabBarPressOpacity: 1,
            tabBarScrollEnabled: true,
          }}
        >
          <Tab.Screen
            name="All"
            children={() => (
              <RenderCategory data={products} navigation={navigation} />
            )}
          />
          {categories.map((cat, index) => (
            <Tab.Screen
              name={cat.name}
              key={cat._id}
              children={() => (
                <RenderCategory
                  data={products
                    .slice()
                    .filter((product) => product.cat._id === cat._id)}
                  navigation={navigation}
                />
              )}
            />
          ))}
        </Tab.Navigator>
      )}
    </>
  );
};

export default TopNavigator;
