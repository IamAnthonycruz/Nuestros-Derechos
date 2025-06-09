import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ResourceCard from "@/components/ResourceCard";
import immigrantResources from "@/constants/immigrantResources";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
const Contacts = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
    >
      <Image
        source={require("@/assets/images/shield.png")}
        style={styles.bodyImg}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Recursos Para Immigrantes</Text>
        <Text style={styles.subtitle}>Organizaciones y servicios de ayuda</Text>
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
        <Feather name="alert-triangle" size={24} color="#B91C1C" />
        <Text style={styles.footerText}>
          Las Organizaciones y Servicios de Ayuda mostrados en esta sección no
          estan involucradas con esta aplicación.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#FAF3E0",
  },
  headerContainer: {
    padding: 24,
    paddingTop: 72,
  },
  headerTitle: {
    fontSize: 28,
    color: "#1F2937",
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#4b5563",
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
    color: "#4b5563",
    lineHeight: 24,
    marginLeft: 8,
    fontFamily: "Montserrat_400Regular",
    fontStyle: "italic",
  },
  bodyImg: {
    position: "absolute",
    alignSelf: "center",
    opacity: 0.06,
  },
});
