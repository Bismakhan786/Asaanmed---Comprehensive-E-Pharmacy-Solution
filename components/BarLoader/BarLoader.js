import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated, View } from "react-native";
import { colors } from "../../constants";

const BarLoader = () => {
  const moveLR = useRef(new Animated.Value(-100)).current;

  const handleAnim = () => {
    moveLR.setValue(-100);
    Animated.loop(
      Animated.timing(moveLR, {
        toValue: 400,
        duration: 800,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    handleAnim();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ translateX: moveLR }],
          },
        ]}
      ></Animated.View>
    </View>
  );
};

export default BarLoader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.gray,
    width: "100%",
    height: 4,
  },
  animatedContainer: {
    backgroundColor: colors.orange,
    width: "40%",
    height: 4,
  },
});
