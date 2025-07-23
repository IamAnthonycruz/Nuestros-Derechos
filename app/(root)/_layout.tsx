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
import { useTheme } from "@/theme/ThemeContext";

export default function TabLayout() {
  SplashScreen.preventAutoHideAsync();
  const theme = useTheme();

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
    <SafeAreaProvider style={{ backgroundColor: theme.background }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.icon,
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarStyle: {
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 20,
            elevation: 4,
            height: 75,
            backgroundColor: theme.card,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Montserrat_400Regular",
          },
          tabBarIconStyle: {
            marginTop: 5,
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
          name="quiz"
          options={{
            title: "Cuestionario",
            tabBarIcon: ({ color }) => (
              <Feather name="book" size={24} color={color} />
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
            href: null,
            title: "",
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
