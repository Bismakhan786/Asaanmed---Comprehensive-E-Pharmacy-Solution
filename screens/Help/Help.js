import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
} from "react-native";
import Header from "../../components/Header/Header";
import FAQ from "../../components/Cards/FAQ";

const faqs = [
  {
    id: 1,
    question: "How to order?",
    answer: (
      <Text>
        Add your favourite medicines to the cart, proceed with checkout and
        place order.{" "}
        <Text
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            textDecorationLine: "underline",
          }}
        >
          Note:
        </Text>{" "}
        Make sure you provide the current location as delivery address..
      </Text>
    ),
  },
  
  {
    id: 2,
    question: "How to cancel order?",
    answer: (
      <Text>
        Cancelling order is pretty much easy in ASAANMED! If you want to cancel
        order then make sure that when you click on UPCOMING order your order status is{" "}
        <Text style={{ fontWeight: "bold" }}>"Processing"</Text> and not{" "}
        <Text style={{ fontWeight: "bold" }}>"Shipped"</Text> only then
        you can cancel your order. If your order is out for delivery or shipped then you
        have to pay penalty on cancelling your order
      </Text>
    ),
  },
  {
    id: 3,
    question: "What if I don't receive my order on time?",
    answer: (
      <Text>
        There may be a situation when you don't get your order on time, but
        don't worry about it. You can contact your rider for the details as it
        may be possible for the rider to stuck in the traffic or something
        unexpected happened with him.
      </Text>
    ),
  },
];

const Help = ({ navigation }) => {
  const purpose = (
    <Text>
      ASAANMED was formed in the year 2020 by Rauf Ashfaq and Sheeraz Khan. It
      is one of the leading medicine trading company of Karachi offering market
      leading discount offers to wholesalers and retailers. ASAANMED is
      dedicated to providing better service and quality medicine products to a
      large number of customers who are looking for medical supplies at
      affordable prices. We offer a wide range of over 6,500 different medicines
      from top pharma companies at great prices. An extensive range of medical
      products like Abocran Sachet, Risek, etc. are also available at amazing
      discounts with us which can only be found here at ASAANMED. Our tagline is, {" "}
      <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
        "BUSINESS TO GROW BUSINESS"
      </Text>
    </Text>
  );
  const contact = (
    <Text>
      If you have any query or complain, you can send email at{" "}
      <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
        asaanmedNew@gmail.com
      </Text>
    </Text>
  );
  const feedback =
    "ASAANMED always wants to hear your valuable feedback. Do not hesitate, just write what you feel about aur services. You can provide feedback on the contact details provided above or through google play store rating and reviews.";

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        label={"Help"}
        showLabel={true}
        showBackIcon={true}
      />
      <View style={styles.scrollView}>
        <Text style={styles.welcome}>Welcome to help center of ASAANMED!</Text>
        <Text style={styles.subhead}>
          Here you can find the answers for all of your queries..
        </Text>
      </View>
      <SectionList
        sections={[
          { id: 1, title: "Our Purpose", data: [purpose] },
          { id: 2, title: "Contact Us", data: [contact] },
          { id: 3, title: "Feedback Us", data: [feedback] },
          { id: 3, title: "FAQ's", data: faqs },
        ]}
        renderItem={({ item, section }) =>
          section.title !== "FAQ's" ? (
            <Text style={styles.item}>{item}</Text>
          ) : (
            <FAQ item={item} />
          )
        }
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  welcome: {
    fontWeight: "bold",
    color: "#e38e37",
    fontSize: 16,
    textAlign: "center",
  },
  subhead: {
    color: "#666",
    fontStyle: "italic",
    paddingVertical: 10,
    textAlign: "center",
  },
  sectionHeader: {
    marginVertical: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
    letterSpacing: 1,
  },
  item: {
    paddingHorizontal: 16,
    color: "#666",
    textAlign: "justify",
    lineHeight: 20,
  },
});
