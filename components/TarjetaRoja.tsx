import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";

export default function TarjetaRojaCard() {
  const sayText = `I do not wish to speak with you, answer your questions, or sign
or hand you any documents based on my 5th Amendment rights under
the United States Constitution. I do not give you permission to enter my home based on my 4th
Amendment rights under the United States Constitution unless you
have a warrant to enter, signed by a judge or magistrate with my
name on it that you slide through the door. I do not give you
permission to search any of my belongings based on my 4th
Amendment rights. I choose to exercise my constitutional rights.`;

  const speak = () => {
    Speech.speak(sayText, {
      language: "en",
      pitch: 1.0,
      rate: 1.0,
    });
  };

  const [textMain, setText] = useState(true);
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
  }, [pulseAnim]);

  const toggleText = () => setText((prev) => !prev);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={toggleText}>
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            {textMain
              ? "AL AGENTE DE ICE:"
              : "Usted tiene derchos consitutionales"}
          </Text>
          {textMain && (
            <TouchableOpacity onPress={speak}>
              <MaterialIcons name="record-voice-over" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.cardContent}>
          <View style={styles.dataRow}>
            <Text style={styles.value}>
              {textMain
                ? "I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution."
                : "DERECHO A NO ABRIR LA PUERTA a menos que el agente de inmigración tenga una orden judicial con su nombre y firmada por un juez o magistrado."}
            </Text>
          </View>

          <View style={styles.dataRow}>
            <Text style={styles.value}>
              {textMain
                ? "I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide through the door. I do not give you permission to search any of my belongings based on my 4th Amendment rights."
                : "DERECHO A NO ABRIR LA PUERTA a menos que el agente de inmigración tenga una orden judicial con su nombre y firmada por un juez o magistrado."}
            </Text>
          </View>

          <View style={styles.dataRow}>
            <Text style={styles.value}>
              {textMain
                ? "I choose to exercise my constitutional rights."
                : "DERECHO A NO FIRMAR NINGUN DOCUMENTO sin primero hablar con un abogado."}
            </Text>
          </View>

          {!textMain && (
            <View style={styles.dataRow}>
              <Text style={styles.value}>
                DERECHO A CONSULTAR CON UN ABOGADO pagado por usted. {"\n\n"}
                SI USTED ESTA FUERA DE CASA: Pregunte al agente de inmigración
                si usted puede irse. Si le dicen que sí, váyase pacíficamente.
                Si le dicen que no, pida hablar con su abogado. {"\n\n"}
                SI USTED ESTA EN CASA: Muestrele esta Tarjeta Roja al agente de
                inmigración a través de la ventana de la puerta.
              </Text>
            </View>
          )}
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
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    padding: 24,
    width: "95%",
    maxWidth: 700,
    alignSelf: "center",
    overflow: "hidden",
  },
  cardHeader: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: "Montserrat_700Bold",
    flex: 1,
  },
  cardContent: {
    marginBottom: 24,
    alignItems: "center",
  },
  dataRow: {
    marginBottom: 12,
    width: "100%",
    maxWidth: 400,
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
    lineHeight: 24,
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
