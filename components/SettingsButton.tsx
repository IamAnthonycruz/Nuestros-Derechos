import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
type SettingsButtonProps = {
  onPress: () => void;
  color?: string;
  size?: number;
};

export default function SettingsButton({
  onPress,
  color = "#4B5563",
  size = 28,
}: SettingsButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel="Settings menu"
      accessibilityRole="button"
    >
      <Feather name="settings" size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 6,
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
  },
});
