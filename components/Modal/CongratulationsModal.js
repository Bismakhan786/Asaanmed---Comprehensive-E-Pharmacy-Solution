import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { clearCart } from "../../Redux/slices/CartSlice";

const CongratulationsModal = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
          Congratulations! 🎉
        </Text>
        <Text style={{ color: "#666" }}>
          Your order has been placed successfully...
        </Text>
        <View style={styles.bottomButtons}>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate({
                name: "Orders",
                path: { caller: "Success" },
              });
              props.emptyCart();
            }}
          >
            <Text style={styles.buttonTxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
    return{
      emptyCart: () => dispatch(clearCart())
    }
  }
  

export default connect(null, mapDispatchToProps)(CongratulationsModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    height: "20%",
    width: "100%",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 6,
  },
  bottomButtons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  button: {
    // backgroundColor: 'whitesmoke',
    borderWidth: 0.5,
    borderColor: "#6666",
    marginHorizontal: 2,
    padding: 8,
    borderRadius: 8,
  },
  buttonTxt: {
    color: "#e37e38",
    fontWeight: "bold",
    letterSpacing: 0.5,
    // fontSize: 16
  },
});
