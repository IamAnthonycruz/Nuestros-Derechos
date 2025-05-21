import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TarjetaRoja from "@/components/TarjetaRoja";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsButton from "@/components/SettingsButton";

const HomeScreen = () => {
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const handleSettingPress = () => {
    setSettingsVisible(!settingsVisible);
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
    >
      <Image
        source={require("@/assets/images/shield.png")}
        style={styles.bodyImg}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Bienvendio!</Text>

        <Text style={styles.infoText}>
          Conozca sus derechos durante una emergencia!
        </Text>
      </View>
      <View style={styles.cardWrapper}>
        <TarjetaRoja></TarjetaRoja>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationTitle}>Informacion Importante</Text>
        <Text style={styles.infoText}>
          Para ver todos sus derechos, visite la seccion 'Sus Derechos'
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: 24,
          marginTop: 8,
          gap: 8,
        }}
      >
        <Feather name="alert-triangle" size={24} color="#B91C1C" />
        <Text
          style={{
            fontSize: 12,
            color: "#4b5563",
            lineHeight: 24,
            fontFamily: "Montserrat_400Regular",
          }}
        >
          Esta information es sola educativa y no representa un aviso legal
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FAF3E0",
  },
  headerContainer: {
    padding: 24,
    paddingTop: 72,
  },
  welcomeText: {
    fontSize: 28,
    color: "#1F2937",
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
  },
  bodyImg: {
    position: "absolute",

    right: 100,

    resizeMode: "contain",
    opacity: 0.06,
  },
  infoText: {
    fontSize: 20,
    color: "#4b5563",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
  },
  cardWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginVertical: 16,
  },
  informationContainer: {
    padding: 24,
    marginTop: 8,
  },
  informationTitle: {
    fontSize: 20,
    color: "#1F2937",
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
  },
  infoTitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 16,
    lineHeight: 24,
  },
});
