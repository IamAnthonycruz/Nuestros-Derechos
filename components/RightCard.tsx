import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeContext";

const RightCard = ({
  rightTitle,
  rightValue,
}: {
  rightTitle: string;
  rightValue: string;
}) => {
  const theme = useTheme();

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
      <View style={styles.topRow}>
        <Feather
          name="file-text"
          size={28}
          color={theme.icon}
          style={styles.icon}
        />
        <Text style={[styles.rightTitle, { color: theme.textPrimary }]}>
          {rightTitle}
        </Text>
      </View>

      <Text style={[styles.rightValue, { color: theme.textSecondary }]}>
        {rightValue}
      </Text>

      <View style={[styles.footerContainer, { borderTopColor: theme.border }]}>
        <Text style={[styles.footerText, { color: theme.textSecondary }]}>
          Información resumida de:{" "}
          <Text
            style={[styles.footerLink, { color: theme.link }]}
            onPress={() =>
              Linking.openURL(
                "https://clearwaterlawgrouptricities.com/5-rights-of-undocumented-immigrants/"
              )
            }
          >
            Clearwater Law Group
          </Text>
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 8 }}>
        <Text style={[styles.footerText, { color: theme.textSecondary }]}>
          Deslice en cualquier direction para ver mas derechos
        </Text>
      </View>
    </View>
  );
};

export default RightCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 10,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
    width: "100%",
    alignSelf: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  rightTitle: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    flexShrink: 1,
  },
  rightValue: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    marginBottom: 20,
    width: "100%",
  },
  footerContainer: {
    borderTopWidth: 1,
    paddingTop: 12,
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
  },
  footerLink: {
    textDecorationLine: "underline",
  },
});
