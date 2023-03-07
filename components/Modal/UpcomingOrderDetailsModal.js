import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const RenderItem = ({ item }) => {
  const itemTotalPrice = Number(item.qty * item.product.price).toFixed(2);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={[styles.item, { width: "40%", textTransform: "uppercase" }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.product.name}
      </Text>
      <Text style={[styles.item, { width: "25%" }]}>{item.qty}</Text>
      <Text style={[styles.item, { width: "25%" }]}>{itemTotalPrice}</Text>
    </View>
  );
};

const UpcomingOrderDetailsModal = (props) => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.orderHead}>Order Details</Text>
        <View style={styles.separator}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text style={[styles.subHead, { width: "40%" }]}>Medicine</Text>
          <Text style={[styles.subHead, { width: "25%" }]}>Quantity</Text>
          <Text style={[styles.subHead, { width: "25%" }]}>Price</Text>
        </View>
        <View
          style={{ height: "60%", marginVertical: 10 }}
        >
          <FlatList
            data={props.orderItems}
            renderItem={({ item }) => <RenderItem item={item} />}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2}}>
          <Text style={{ fontSize: 15}}>Before </Text>
          <Text style={{ fontSize: 15}}>PKR. {props.itemsTotal}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginBottom: 2}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Bachat <Text style={{ fontSize: 18 }}>🎉</Text></Text>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>PKR. {props.itemsTotal - props.total}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginBottom: 2}}>
          <Text style={{ fontSize: 15}}>After </Text>
          <Text style={{ fontSize: 15}}>PKR. {props.total}</Text>
        </View>

        <Text style={styles.bottomTxt}>Enjoy healthy LIFE!</Text>
      </View>
    </View>
  );
};

export default UpcomingOrderDetailsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    // backgroundColor: 'red'
  },
  modalView: {
    height: "70%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: "10%",
    padding: "5%",
  },
  orderHead: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  separator: {
    borderWidth: 0.3,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  subHead: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#666",
    marginHorizontal: 4,
  },
  bottomTxt: {
    position: "absolute",
    bottom: 10,
    color: "#e38e37",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
  item: {
    textAlign: "center",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#6666",
    marginHorizontal: 4,
    marginBottom: 4,
  },
});
