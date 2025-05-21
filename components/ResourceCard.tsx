import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const ResourceCard = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn(`No se puede abrir este enlace ${url}`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <View style={styles.linkContainer}>
        <View>
          <AntDesign name="link" size={24} color="#B91C1C" />
        </View>
        <TouchableOpacity style={styles.touchText} onPress={handlePress}>
          <Text style={styles.linkText}>{url}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResourceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 30,
    maxWidth: "90%",
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    marginVertical: 8,
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
  textContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxWidth: "100%",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  linkText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    textDecorationLine: "underline",
    color: "#2563EB",
  },
  touchText: {
    paddingHorizontal: 10,
    maxWidth: "60%",
  },
});
