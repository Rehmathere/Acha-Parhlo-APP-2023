import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { firebase } from "../firestore";

export default function Playground({ route }) {
  // 1 - useState
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // 2 - const
  const { category } = route.params;
  // 3 - useEffect
  useEffect(() => {
    getQuestions();
  }, []);
  // 4 - Function
  const getQuestions = async () => {
    setSelectedOptions({});
    setShowResult(false);
    const db = firebase.firestore();
    const questionRef = db.collection("questions");
    const snapshot = await questionRef.where("category", "==", category).get();
    if (snapshot.empty) {
      console.log(" No Matching Documents ");
      return;
    }
    const allQuestions = snapshot.docs.map((doc) => doc.data());
    const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffleQuestions.slice(0, 10));
  };
  // 5 - function
  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: option,
    });
  };
  // 6 - function
  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctOption) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResult(true);
  };
  // Main Body
  return (
    <View style={styles.container}>
      {/* Quiz */}
      <FlatList
        data={questions}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            {/* Question Statement */}
            <Text style={styles.question}>{item.question}</Text>
            {/* Option 1 */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 1 && styles.selectedOptions,
                showResult && item.correctOption === 1 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 1 &&
                  selectedOptions[index] !== item.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 1)}
              disabled={showResult}
            >
              <Text>{item.option1}</Text>
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 2 && styles.selectedOptions,
                showResult && item.correctOption === 2 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 2 &&
                  selectedOptions[index] !== item.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 2)}
              disabled={showResult}
            >
              <Text>{item.option2}</Text>
            </TouchableOpacity>
            {/* Option 3 */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 3 && styles.selectedOptions,
                showResult && item.correctOption === 3 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 3 &&
                  selectedOptions[index] !== item.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 3)}
              disabled={showResult}
            >
              <Text>{item.option3}</Text>
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 4 && styles.selectedOptions,
                showResult && item.correctOption === 4 && styles.correctOption,
                showResult &&
                  selectedOptions[index] === 4 &&
                  selectedOptions[index] !== item.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 4)}
              disabled={showResult}
            >
              <Text>{item.option4}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={showResult}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {/* Score Showing Screen */}
      {showResult && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            You Scored {score} out of {questions.length}
          </Text>
          <TouchableOpacity style={styles.tyAgainButton} onPress={getQuestions}>
            <Text style={styles.tyAgainButtontext}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
  },
  questionContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#eee",
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  selectedOptions: {
    backgroundColor: "#949494",
  },
  correctOption: {
    backgroundColor: "lightgreen",
  },
  wrongOption: {
    backgroundColor: "pink",
  },
  submitButton:{
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  submitButtonText:{
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  result:{
    alignItems:"center",
    justifyContent:"center",
  },
  resultText:{
    fontSize: 15,
    fontWeight:"bold",
    marginVertical: 10,
  },
  tyAgainButton:{
    backgroundColor:"blue",
    padding: 10,
    marginVertical:10,
    borderRadius: 5,
  },
  tyAgainButtontext:{
    color:"#fff",
    fontSize: 15,
  }
});




















