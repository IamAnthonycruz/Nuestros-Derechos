import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@/theme/ThemeContext";

import { quizQuestions } from "@/constants/quizQuestions";
import { router } from "expo-router";

const QuizSlide = ({ onComplete }: { onComplete: () => void }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  const onSelectOption = (index: number) => {
    if (selected === null) {
      setSelected(index);
      if (index === currentQuestion.correctIndex) {
        setScore((s) => s + 1);
      }
    }
  };

  const onNext = () => {
    if (selected === null) return; // Prevent next without selection

    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const onRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.textPrimary }]}>
          ¡Terminaste!
        </Text>
        <Text style={[styles.score, { color: theme.textPrimary }]}>
          Puntuación: {score} / {quizQuestions.length}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onRestart}>
          <Text style={styles.buttonText}>Reiniciar Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.completeBtn]}
          onPress={() => router.push("/rights")}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.question, { color: theme.textPrimary }]}>
        {currentQuestion.question}
      </Text>
      {currentQuestion.options.map((option, i) => {
        const isSelected = i === selected;
        const isCorrect = i === currentQuestion.correctIndex;
        let backgroundColor = theme.card;

        if (selected !== null) {
          if (isSelected) {
            backgroundColor = isCorrect ? "#4CAF50" : "#F44336"; // green or red
          } else if (isCorrect) {
            backgroundColor = "#4CAF50"; // highlight correct if user missed it
          }
        }

        return (
          <TouchableOpacity
            key={i}
            style={[styles.option, { backgroundColor }]}
            onPress={() => onSelectOption(i)}
            disabled={selected !== null}
          >
            <Text
              style={{
                color: theme.textPrimary,
                fontFamily: "Montserrat_400Regular",
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        style={[styles.button, selected === null && { opacity: 0.5 }]}
        onPress={onNext}
        disabled={selected === null}
      >
        <Text style={styles.buttonText}>
          {currentIndex + 1 === quizQuestions.length ? "Terminar" : "Siguiente"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  question: {
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "Montserrat_700Bold",
  },
  option: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 6,
  },
  button: {
    marginTop: 20,

    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Montserrat_700Bold",
  },
  score: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Montserrat_400Regular",
  },
  completeBtn: {
    backgroundColor: "#4CAF50",
    marginTop: 10,
  },
});
