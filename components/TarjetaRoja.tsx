import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useRef, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
export default function TarjetaRojaCard() {
  const sayText = `I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.
I do not give you permission to enter or search my home based on my 4th Amendment rights under the United States Constitution unless you show me a warrant to enter that is signed by a judge or magistrate.
I do not give you permission to search any of my belongings based on my 4th Amendment rights under the United States Constitution.
I choose to exercise my constitutional rights.`;

  const speak = () => {
    Speech.speak(sayText, {
      language: "en",
      pitch: 1.0,
      rate: 1.0,
    });
  };
  const [textMain, setText] = React.useState(true);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1.03,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(pulse).start();
  }, []);

  const toggleText = () => {
    setText((prevText) => !prevText);
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={toggleText}>
      <Animated.View
        style={[
          {
            transform: [{ scale: pulseAnim }],
          },
        ]}
      >
        <View style={styles.cardHeader}>
          {textMain ? (
            <Text style={styles.cardTitle}>AL AGENTE DE ICE: </Text>
          ) : (
            <Text style={styles.cardTitle}>SUS DERECHOS </Text>
          )}
          {textMain ? (
            <TouchableOpacity onPress={speak}>
              <MaterialIcons name="record-voice-over" size={24} color="white" />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.cardContent}>
          <View style={styles.dataRow}>
            {textMain ? (
              <Text style={styles.value}>
                I do not wish to speak with you, answer your questions, or sign
                or hand you any documents based on my 5th Amendment rights under
                the United States Constitution.
              </Text>
            ) : (
              <Text style={styles.value}>
                DERECHO A NO ABRIR LA PUERTA a menos que el agente de
                inmigración tenga una orden judicial con su nombre y firmada por
                un juez o magistrado.
              </Text>
            )}
          </View>

          <View style={styles.dataRow}>
            {textMain ? (
              <Text style={styles.value}>
                I do not give you permission to enter my home based on my 4th
                Amendment rights under the United States Constitution unless you
                have a warrant to enter, signed by a judge or magistrate with my
                name on it that you slide through the door. I do not give you
                permission to search any of my belongings based on my 4th
                Amendment rights.
              </Text>
            ) : (
              <Text style={styles.value}>
                DERECHO A NO ABRIR LA PUERTA a menos que el agente de
                inmigración tenga una orden judicial con su nombre y firmada por
                un juez o magistrado.
              </Text>
            )}
          </View>

          <View style={styles.dataRow}>
            {textMain ? (
              <Text style={styles.value}>
                I choose to exercise my constitutional rights.
              </Text>
            ) : (
              <Text style={styles.value}>
                DERECHO A NO FIRMAR NINGUN DOCUMENTO sin primero hablar con un
                abogado.
              </Text>
            )}
          </View>
          <View style={styles.dataRow}>
            {!textMain ? (
              <Text style={styles.value}>
                DERECHO A CONSULTAR CON UN ABOGADO pagado por usted. {"\n \n"}SI
                USTED ESTA FUERA DE CASA: Pregunte al agente de inmigración si
                usted puede irse. Si le dicen que sí, váyase pacíficamente. Si
                le dicen que no, pida hablar con su abogado.{"\n \n"} SI USTED
                ESTA EN CASA: Muestrele esta Tarjeta Roja al agente de
                inmigración a través de la ventana de la puerta.
              </Text>
            ) : null}
          </View>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.disclaimer}>Toque para voltear</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#DC2626",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    padding: 24,
    width: "90%",
    maxWidth: 380,
    overflow: "hidden",
    position: "relative",
  },
  cardHeader: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
  },
  cardTitle: {
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: "Montserrat_700Bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginTop: 4,
    fontFamily: "Montserrat_400Regular",
  },
  cardContent: {
    marginBottom: 24,
  },
  dataRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    width: "50%",
    fontFamily: "Montserrat_600SemiBold",
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF",
    width: "100%",
    fontFamily: "Montserrat_400Regular",
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.3)",
    paddingTop: 16,
  },
  disclaimer: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    lineHeight: 18,
    fontFamily: "Montserrat_400Regular",
  },
});
