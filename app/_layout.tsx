import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@/theme/ThemeContext";
export default function RootLayout() {
  return (
    <>
      <ThemeProvider>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="(auth)/Welcome"
        >
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: "Not Found 😕" }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
