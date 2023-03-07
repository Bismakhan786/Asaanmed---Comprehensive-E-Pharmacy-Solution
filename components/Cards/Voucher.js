import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Voucher = (props) => {
  // console.log(voucherType)
  const { item, voucherType } = props;
  return (
    <TouchableOpacity
    onPress={() => props.navigation.navigate({name: "MyCart", params:{voucher: item}, path: {caller: "Voucher"}})}
      style={[styles.container, voucherType === "Used" && styles.disabled]}
      disabled={voucherType === "Used" && true}
    >
      <View style={styles.imageView}>
        <View style={styles.semiCircle}></View>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.dottedLineView}></View>
      <View style={styles.txtView}>
        <View style={styles.semiCircle2}></View>
        <View style={styles.semiCircle3}></View>
        <View style={styles.semiCircle4}></View>
        <View>
          <Text
            style={[
              styles.medName,
              voucherType === "Used" && styles.disabledTxt,
            ]}
          >
            Code: {item.code}
          </Text>
          <Text
            style={[
              styles.percentage,
              voucherType === "Used" && styles.disabledTxt,
            ]}
          >
            {item.percentage}% Off
          </Text>
          <Text style={styles.validity}>
            {/* {voucherType === "Available"
              ? `Valid till ${item.validityDate}`
              : `Used On ${item.usedOn}`}{" "} */}
              {item.expiredAt.slice(0, 10)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 5,
    // backgroundColor: 'white'
  },
  disabled: {
    opacity: 0.6,
  },
  disabledTxt: {
    textDecorationLine: "line-through",
  },
  imageView: {
    width: "40%",
    backgroundColor: "#e7e7e8",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  txtView: {
    padding: 20,
    width: "62%",
    backgroundColor: "#e7e7e8",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  medName: {
    fontSize: 16,
    color: "#666",
    marginBottom: 2,
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 1,
  },
  validity: {
    fontSize: 12,
    color: "#666",
  },
  dottedLineView: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#e7e7e8",
  },
  semiCircle: {
    width: 0,
    height: 0,
    position: "absolute",
    left: 0,
    borderRightWidth: 14,
    borderBottomWidth: 25,
    borderColor: "white",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "white",
  },
  semiCircle2: {
    width: 0,
    height: 0,
    position: "absolute",
    top: 8,
    right: 0,
    borderLeftWidth: 14,
    borderBottomWidth: 25,
    borderColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "white",
  },
  semiCircle3: {
    width: 0,
    height: 0,
    position: "absolute",
    right: 0,
    top: 40,
    borderLeftWidth: 14,
    borderBottomWidth: 25,
    borderColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "white",
  },
  semiCircle4: {
    width: 0,
    height: 0,
    position: "absolute",
    right: 0,
    top: 73,
    borderLeftWidth: 14,
    borderBottomWidth: 25,
    borderColor: "white",
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    backgroundColor: "white",
  },
});
