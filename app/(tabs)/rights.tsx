import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RightCard from "@/components/RightCard";
import immigrantRights from "@/constants/immigrantRights";
import { Image } from "react-native";
const Rights = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
    >
      <Image
        source={require("@/assets/images/shield.png")}
        style={styles.bodyImg}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Conozca Sus Derechos!</Text>
        <Text style={styles.subtitle}>
          Information importante para protegerse
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {immigrantRights.map((right: any, index) => (
          <RightCard
            key={index}
            rightTitle={right.title}
            rightValue={right.description}
          />
        ))}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Information summarized from{"\n"}
            <Text style={styles.footerLink}>
              “5 Rights of Undocumented Immigrants.” Family Law Attorney
              Kennewick Clearwater Law Group, Clearwater Law Group, 27 Apr.
              2022,
              clearwaterlawgrouptricities.com/5-rights-of-undocumented-immigrants/.{" "}
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Rights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
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
  },
  subtitle: {
    fontSize: 20,
    color: "#4b5563",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
  },
  bodyImg: {
    position: "absolute",
    alignSelf: "center",
    opacity: 0.06,
  },
  footerContainer: {
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 15,
    color: "#B91C1C",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
  },
  footerLink: {
    fontSize: 15,
    color: "black",
    lineHeight: 24,
    fontFamily: "Montserrat_400Regular",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
