import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeContext";

const ResourceCard = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  const theme = useTheme();

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn(`No se puede abrir este enlace ${url}`);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.card,
          shadowColor: theme.textSecondary,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.cardDescription, { color: theme.textSecondary }]}>
          {description}
        </Text>
      </View>
      <View style={styles.linkContainer}>
        <AntDesign name="link" size={24} color={theme.icon} />
        <TouchableOpacity style={styles.touchText} onPress={handlePress}>
          <Text style={[styles.linkText, { color: theme.link }]}>{url}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResourceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // overridden by theme
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 30,
    maxWidth: "90%",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
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
    alignItems: "center",
    gap: 8,
  },
  linkText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    textDecorationLine: "underline",
    color: "#2563EB", // overridden by theme
  },
  touchText: {
    paddingHorizontal: 10,
    maxWidth: "60%",
  },
});
