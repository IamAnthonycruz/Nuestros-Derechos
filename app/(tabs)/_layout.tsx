import { SplashScreen, Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

// Prevent splash screen from auto-hiding

export default function TabLayout() {
  // Hide splash screen once fonts are loaded
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider style={{ backgroundColor: "#FAF3E0" }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#B91C1C",
          tabBarInactiveTintColor: "#737373",
          tabBarStyle: {
            backgroundColor: "#FAF3E0",
            borderTopColor: "#E5E7EB",
            borderRadius: 30,
            height: 80,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Montserrat_400Regular", // Montserrat_600SemiBold",
            color: "black",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tarjeta",
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="rights"
          options={{
            title: "Derechos",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="list-alt" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contacts"
          options={{
            title: "Recursos",
            tabBarIcon: ({ color }) => (
              <Feather name="globe" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Ajustes",
            tabBarIcon: ({ color }) => (
              <Feather name="settings" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="information"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
