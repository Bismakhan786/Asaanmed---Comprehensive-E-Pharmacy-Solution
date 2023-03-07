import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FAQ = (props) => {
  const faq = props.item;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setShowAnswer(!showAnswer)}
      style={styles.faqs}
    >
      <View
        style={[
          styles.questionHeader,
          !showAnswer && {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
        ]}
      >
        <AntDesign
          name={!showAnswer ? "caretright" : "caretdown"}
          size={10}
          color="#666"
        />
        <Text style={styles.question}>{faq.question}</Text>
      </View>
      {showAnswer && (
        <View style={styles.answerHeader}>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FAQ;
const styles = StyleSheet.create({
  questionHeader: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(247,247,247,1.0)",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  answerHeader: {
    padding: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  question: {
    fontWeight: "500",
    paddingLeft: 10,
    color: "#666",
  },
  answer: {
    color: "#666",
    textAlign: 'justify'
  },
  faqs: {
    marginHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 0.6,
    borderColor: "#6666",
  },
});
