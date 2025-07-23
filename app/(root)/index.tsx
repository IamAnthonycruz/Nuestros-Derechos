import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import TarjetaRoja from "@/components/TarjetaRoja";
import { useTheme } from "@/theme/ThemeContext";
import { Redirect, router } from "expo-router";

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
    >
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
            marginBottom: 0,
          }}
        >
          <Text style={[styles.welcomeText, { color: theme.textPrimary }]}>
            ¡Bienvenido!
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/settings");
            }}
          >
            <FontAwesome name="gear" size={28} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.infoTextHeader, { color: theme.textSecondary }]}>
          Conozca sus derechos durante una emergencia!
        </Text>
      </View>

      <View style={styles.cardWrapper}>
        <TarjetaRoja />
      </View>

      <View style={styles.informationContainer}>
        <Text style={[styles.informationTitle, { color: theme.textPrimary }]}>
          Información Importante!
        </Text>
        <Text style={[styles.infoText, { color: theme.textSecondary }]}>
          Para ver todos sus derechos, visite la sección 'Sus Derechos'
        </Text>
      </View>

      <View style={styles.alertContainer}>
        <Feather name="alert-triangle" size={24} color={theme.icon} />
        <Text style={[styles.alertText, { color: theme.textSecondary }]}>
          Esta información es solo educativa y no representa un aviso legal
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
  },
  headerContainer: {
    padding: 24,
    paddingTop: 72,
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
  },
  infoTextHeader: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textAlign: "left",
  },
  bodyImg: {
    position: "absolute",
    alignSelf: "center",

    width: 300,
    height: 300,
    opacity: 0.1,
    top: -40,
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
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
  },
  infoText: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 24,
    gap: 8,
  },
  alertText: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    flex: 1,
  },
});
