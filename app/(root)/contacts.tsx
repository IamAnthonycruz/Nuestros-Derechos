import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeContext";
import ResourceCard from "@/components/ResourceCard";
import immigrantResources from "@/constants/immigrantResources";

const Contacts = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollContainer, { backgroundColor: theme.background }]}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
    >
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
          Recursos Para Immigrantes
        </Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Organizaciones y servicios de ayuda
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {immigrantResources.map((resource: any, index) => (
          <ResourceCard
            key={index}
            title={resource.name}
            description={resource.description}
            url={resource.website}
          />
        ))}
      </View>

      <View style={styles.footerContainer}>
        <Feather name="alert-triangle" size={24} color={"#F87171"} />
        <Text style={[styles.footerText, { color: theme.textSecondary }]}>
          Las Organizaciones y Servicios de Ayuda mostrados en esta sección no
          están involucradas con esta aplicación.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  headerContainer: {
    padding: 24,
    paddingTop: 72,
  },
  headerTitle: {
    fontSize: 28,
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
  },
  footerContainer: {
    padding: 24,
    paddingTop: 52,
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
    fontFamily: "Montserrat_400Regular",
    fontStyle: "italic",
  },
  bodyImg: {
    position: "absolute",
    alignSelf: "center",
    opacity: 0.06,
    width: 300,
    height: 300,
  },
});
