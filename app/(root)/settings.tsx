import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Assuming you have a useTheme hook that provides the current theme colors
import { useTheme } from "@/theme/ThemeContext"; // <-- update path to your theme provider

export default function SettingsScreen() {
  const [language, setLanguage] = useState("Español");
  const router = useRouter();

  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.textPrimary }]}>
          Ajustes
        </Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.settingsSection}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            General
          </Text>

          <TouchableOpacity
            style={[
              styles.settingItem,
              {
                backgroundColor: theme.background,
                shadowColor: theme.textSecondary,
              },
            ]}
          >
            <View style={styles.settingLeft}>
              <SimpleLineIcons name="globe" size={24} color={theme.icon} />
              <Text
                style={[styles.settingText, { color: theme.textSecondary }]}
              >
                Idioma
              </Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={[styles.settingValue, { color: theme.icon }]}>
                {language}
              </Text>
              <AntDesign name="right" size={24} color={theme.icon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsSection}>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
            Información
          </Text>

          <TouchableOpacity
            style={[
              styles.settingItem,
              {
                backgroundColor: theme.background,
                shadowColor: theme.shadow,
              },
            ]}
            onPress={() => router.navigate("/information")}
          >
            <View style={styles.settingLeft}>
              <Feather name="info" size={24} color={theme.icon} />
              <Text
                style={[styles.settingText, { color: theme.textSecondary }]}
              >
                Sobre esta aplicación
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={[styles.versionText, { color: theme.icon }]}>
          Versión 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  headerContainer: {
    paddingTop: 72,
    paddingBottom: 24,
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 28,
  },
  settingsContainer: {
    paddingHorizontal: 8,
  },
  settingsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    marginBottom: 16,
    paddingLeft: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginLeft: 12,
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginRight: 8,
  },
  versionText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    textAlign: "center",
    marginTop: 32,
  },
});
