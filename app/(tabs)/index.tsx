import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TarjetaRoja from "@/components/TarjetaRoja";
import { Feather } from "@expo/vector-icons";

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
        source={require("@/assets/images/LogoFinal.png")}
        style={styles.bodyImg}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Bienvendio!</Text>

        <Text style={styles.infoTextHeader}>
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
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginHorizontal: 24,
          gap: 8,
        }}
      >
        <Feather name="alert-triangle" size={24} color="#B91C1C" />
        <Text
          style={{
            fontSize: 15,
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
    alignSelf: "center",
    resizeMode: "cover",
    width: 400,
    height: 400,
    opacity: 0.1,
    top: -50,
  },
  infoTextHeader: {
    fontSize: 20,
    color: "#4b5563",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textAlign: "left",
  },
  infoText: {
    fontSize: 20,
    color: "#4b5563",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
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
    alignContent: "center",
    justifyContent: "center",
  },
  informationTitle: {
    fontSize: 20,
    color: "#1F2937",
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
  },
  infoTitle: {
    fontSize: 20,
    color: "#4B5563",
    marginBottom: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
