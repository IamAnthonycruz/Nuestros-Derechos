import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import colors from "@/theme/color";

const ThemeContext = createContext(colors.light);

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme(); // 'light' | 'dark'
  const theme = colors[systemScheme] || colors.light;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
