import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { Link, Redirect, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("Español");
  const router = useRouter();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={require("@/assets/images/shield.png")}
        style={styles.bodyImg}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Ajustes</Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>General</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <SimpleLineIcons name="globe" size={24} color="#B91C1C" />
              <Text style={styles.settingText}>Idioma</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>{language}</Text>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Information</Text>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => router.navigate("/information")}
          >
            <View style={styles.settingLeft}>
              <Feather name="info" size={24} color="#B91C1C" />
              <Text style={styles.settingText}>Sobre esta application</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Soporte</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Feather name="help-circle" size={24} color="#B91C1C" />
              <Text style={styles.settingText}>Ayuda y Soporte</Text>
            </View>
          </TouchableOpacity>
        </View>*/}

        <Text style={styles.versionText}>Versión 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FAF3E0",
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  headerContainer: {
    padding: 24,
    paddingTop: 72,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 28,
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "#4B5563",
    lineHeight: 24,
  },
  settingsContainer: {
    padding: 16,
  },
  settingsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: "#1F2937",
    marginBottom: 16,
    paddingLeft: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "#4B5563",
    marginLeft: 12,
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "#9CA3AF",
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    marginBottom: 24,
  },
  logoutText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    color: "#B91C1C",
    marginLeft: 8,
  },
  versionText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
  },
  bodyImg: {
    position: "absolute",
    right: 100,

    opacity: 0.06,
  },
});
