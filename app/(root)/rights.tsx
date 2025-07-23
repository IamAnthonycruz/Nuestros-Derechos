import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import RightCard from "@/components/RightCard";
import immigrantRights from "@/constants/immigrantRights";
import { useTheme } from "@/theme/ThemeContext";

const RightsSwiperScreen = () => {
  const swiperRef = useRef<any>(null);
  const theme = useTheme();
  const [showTestPrompt, setShowTestPrompt] = useState(false);

  const onSwipedAll = () => {
    setShowTestPrompt(true);
  };

  const handleTestPress = () => {
    setShowTestPrompt(false);
    // TODO: Navigate to test screen here
    // router.push("/rights-test");
  };

  const handleDismiss = () => {
    setShowTestPrompt(false);
    swiperRef.current?.jumpToCardIndex(0); // optional reset
  };

  const renderCard = (card: any) => (
    <View style={styles.cardWrapper}>
      <RightCard rightTitle={card.title} rightValue={card.description} />
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Text style={[styles.header, { color: theme.textPrimary }]}>
          ¡Aprenda Sus Derechos!
        </Text>
      </View>

      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={immigrantRights}
          renderCard={renderCard}
          onSwipedAll={onSwipedAll}
          stackSize={1}
          backgroundColor="transparent"
          cardVerticalMargin={40}
          disableTopSwipe
          disableBottomSwipe
          animateCardOpacity
        />
      </View>

      <Modal visible={showTestPrompt} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View
            style={[styles.modalContent, { backgroundColor: theme.surface }]}
          >
            <Text style={[styles.modalText, { color: theme.textPrimary }]}>
              ¿Le gustaría poner a prueba su conocimiento?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={handleTestPress}>
                <Text style={styles.buttonText}>Sí, hágalo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleDismiss}>
                <Text style={styles.buttonText}>Tal vez después</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RightsSwiperScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Montserrat_700Bold",
  },
  swiperContainer: {
    flex: 1,
  },
  cardWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 24,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    backgroundColor: "#007AFF",
    marginHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});
