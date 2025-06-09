import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const RightCard = ({
  rightTitle,
  rightValue,
}: {
  rightTitle: string;
  rightValue: string;
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Feather name="file-text" size={30} color="#B91C1C" />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.rightTitle}>{rightTitle}</Text>
        <Text style={styles.rightValue}>{rightValue}</Text>
      </View>
    </View>
  );
};

export default RightCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 20,
    maxWidth: "90%",

    alignContent: "center",
    marginVertical: 20,
  },
  rightContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  rightTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1F2937",
    fontFamily: "Montserrat_700Bold",
  },
  rightValue: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4b5563",
    fontFamily: "Montserrat_400Regular",
    maxHeight: 600,

    marginBottom: 30,
  },
});
