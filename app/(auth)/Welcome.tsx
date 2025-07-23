import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import React, { useRef, useState } from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants"; // Make sure the last item has `showConsent: true`

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [consentChecked, setConsentChecked] = useState(false);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() =>
          swiperRef.current?.scrollBy(onboarding.length - 1 - activeIndex)
        }
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => {
          setActiveIndex(index);
          setConsentChecked(false); // Reset checkbox when moving slides
        }}
      >
        {onboarding.map((item, index) => (
          <View style={styles.slide} key={index}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.description}>{item.description}</Text>

            {item.showConsent && (
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  onPress={() => setConsentChecked(!consentChecked)}
                  style={styles.checkbox}
                >
                  {consentChecked && <View style={styles.checked} />}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                  He leído y acepto los{" "}
                  <Text
                    style={styles.link}
                    onPress={() => router.push("/Terms&Conditions")}
                  >
                    Términos de Uso
                  </Text>{" "}
                  y{" "}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.privacypolicies.com/live/24a99f30-82e9-454e-ad45-28c5257a438d"
                      )
                    }
                  >
                    la Polica de Privacidad
                  </Text>
                  .
                </Text>
              </View>
            )}
          </View>
        ))}
      </Swiper>

      <View style={styles.customDotsContainer}>
        {onboarding.map((_, index) => (
          <View
            key={index}
            style={index === activeIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          isLastSlide && !consentChecked && { backgroundColor: "#d3d3d3" },
        ]}
        disabled={isLastSlide && !consentChecked}
        onPress={() =>
          isLastSlide
            ? router.replace("/(root)")
            : swiperRef.current?.scrollBy(1)
        }
      >
        <Text style={styles.buttonText}>
          {isLastSlide ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "black",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    color: "#1E293B",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#475569",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 20,
  },
  image: {
    marginTop: 60,
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E2E8F0",
    marginHorizontal: 4,
    marginBottom: 30,
  },
  activeDot: {
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#B91C1C",
    marginHorizontal: 4,
    marginBottom: 30,
  },
  customDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#B91C1C",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    width: "50%",
    marginBottom: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#B91C1C",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: "#B91C1C",
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: "#475569",
    fontFamily: "Montserrat_500Medium",
    lineHeight: 20,
  },
  link: {
    textDecorationLine: "underline",
    color: "#B91C1C",
    fontFamily: "Montserrat_600SemiBold",
  },
});
