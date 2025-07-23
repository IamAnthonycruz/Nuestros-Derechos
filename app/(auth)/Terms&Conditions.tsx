import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TermsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Términos y Condiciones</Text>

        <Text style={styles.paragraph}>
          Al utilizar esta aplicación ("la App"), aceptas los siguientes
          términos y condiciones. Si no estás de acuerdo con ellos, por favor no
          utilices esta App.
        </Text>

        <Text style={styles.heading}>1. Uso de la Aplicación</Text>
        <Text style={styles.paragraph}>
          Esta App está diseñada con fines informativos y educativos. No se
          garantiza la exactitud, integridad o utilidad de ninguna información
          presentada.
        </Text>

        <Text style={styles.heading}>2. Sin Responsabilidad Legal</Text>
        <Text style={styles.paragraph}>
          El desarrollador de esta App no será responsable por ningún daño
          directo, indirecto, incidental, consecuente o especial que surja del
          uso o la imposibilidad de uso de esta App. El uso de esta App es bajo
          tu propio riesgo.
        </Text>

        <Text style={styles.heading}>3. No Asesoría Legal o Profesional</Text>
        <Text style={styles.paragraph}>
          La información contenida en esta App no constituye asesoría legal,
          médica o profesional. Consulta con un profesional calificado si
          necesitas orientación específica.
        </Text>

        <Text style={styles.heading}>4. Cambios a los Términos</Text>
        <Text style={styles.paragraph}>
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Es tu responsabilidad revisar periódicamente esta sección
          para estar al tanto de los cambios.
        </Text>

        <Text style={styles.heading}>5. Aceptación</Text>
        <Text style={styles.paragraph}>
          Al continuar utilizando la App, reconoces que has leído, comprendido y
          aceptado estos Términos y Condiciones.
        </Text>

        <Text style={styles.paragraph}>
          Última actualización: {new Date().toLocaleDateString()}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    color: "#1E293B",
    marginBottom: 20,
    textAlign: "center",
  },
  heading: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    color: "#1E293B",
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: "#475569",
    fontFamily: "Montserrat_400Regular",
    lineHeight: 22,
  },
});
