import { StyleSheet, Text, View } from "react-native";
import React from "react";

const information = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>About</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.bodyContainer}>
          This non-profit app was built with the sole purpose to help inform as
          many undocumented immigrants of the rights granted to them by the US
          Constitution.{"\n\n"} I am first-generation Mexican computer science
          student and I am very aware of the struggle that Hispanics face on a
          daily basis especially those undocumented.
        </Text>

        <Text style={styles.bodyContainer}>
          {"\n\n"} Que Dios los cuide, y que los libre de todo mal en el nombre
          de su hijo Jesus Cristo.
        </Text>
      </View>
    </View>
  );
};

export default information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FAF3E0",
  },
  headerContainer: {
    padding: 24,
    paddingTop: 72,
  },
  headerTitle: {
    fontSize: 28,
    color: "#1F2937",
    marginBottom: 8,
    fontFamily: "Montserrat_700Bold",
    textDecorationLine: "underline",
  },
  bodyContainer: {
    fontSize: 20,
    color: "#4b5563",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
});
