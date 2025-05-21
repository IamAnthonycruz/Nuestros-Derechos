import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const NotFound = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.text}>You reached an unexisting page</Text>
        <Link href="/" style={styles.link}>
          <Text>Go back to the home screen</Text>
        </Link>
      </View>
    </>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
