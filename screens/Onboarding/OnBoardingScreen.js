import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Animated,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import dummyData from "../../constants/dummyData";

import OnBoardingItem from "../../components/Cards/OnBoardingItem";
import Paginator from "../../components/Paginator/Paginator";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

const OnBoardingScreen = (props) => {
  const { navigation } = props;

  const getStarted = async () => {
    // await AsyncStorage.setItem("ONBOARDED", "true");
    // navigation.navigate("Signin")
    navigation.navigate("OTPAuth");
    // console.log(await AsyncStorage.getItem("ONBOARDED"));
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const goNextSlide = () => {
    const nextSlide = currentIndex + 1;
    const offset = nextSlide * width;
    slidesRef?.current?.scrollToOffset({ offset });
    setCurrentIndex(nextSlide);
  };

  const skip = () => {
    const lastSlideIndex = dummyData.slides.length - 1;
    const offset = lastSlideIndex * width;
    slidesRef?.current?.scrollToOffset({ offset });
    setCurrentIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        hidden={false}
        backgroundColor="white"
      />

      <FlatList
        data={dummyData.slides}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ height: height * 0.75 }}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={dummyData.slides} scrollx={scrollx} />
      <View style={{ marginBottom: 20, paddingHorizontal: 10 }}>
        {currentIndex == dummyData.slides.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity
              onPress={getStarted}
              style={{
                flex: 1,
                height: 50,
                backgroundColor: "#e38b37",
                borderColor: "#e38b37",
                borderWidth: 2,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 16,
                  color: "#e7e7e7",
                }}
              >
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={skip}
              style={{
                flex: 1,
                backgroundColor: "transparent",
                borderColor: "#e38b37",
                borderWidth: 2,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 16,
                  color: "#e38b37",
                }}
              >
                SKIP
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity
              onPress={goNextSlide}
              style={{
                flex: 1,
                height: 50,
                backgroundColor: "#e38b37",
                borderColor: "#e38b37",
                borderWidth: 2,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 16,
                  color: "#e7e7e7",
                }}
              >
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
