import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RateOrder = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.thanks}>Thank You for choosing ASSANMED!</Text>
        <Text style={styles.msg}>Please rate our service..</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
            
          <AntDesign name="staro" size={24} color="black" />
          <AntDesign name="staro" size={24} color="black" />
          <AntDesign name="staro" size={24} color="black" />
          <AntDesign name="staro" size={24} color="black" />
          <AntDesign name="staro" size={24} color="black" />
        </View>
        
      <TouchableOpacity style={styles.rateBtn}>
            <Text style={styles.rate}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RateOrder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    // backgroundColor: 'red'
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    height: "30%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: "10%",
    padding: "5%",
  },
  thanks:{
    fontWeight: 'bold'
  },
  msg: {
    color: "#666"
  },
  rateBtn: {
    position: 'absolute',
    bottom: "5%",
    height: '20%',
    width: '100%',
    backgroundColor: '#e38e37',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  rate: {
    color: 'white',
    fontWeight: 'bold'
  }
});
