import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
// Add Function
import { firebase } from "../firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Z_Test_3_A() {
  // Navigation
  const navigation = useNavigation();
  // ----------- Backend Part Logic -----------
  // Get the document ID passed from the previous page
  const route = useRoute();
  const { documentId } = route.params;
  const englishAbilityRef = firebase.firestore().collection("4 - Student Records").doc(documentId);
  const [info1, setInfo1] = useState("");
  const [info3, setInfo3] = useState("");
  const [info4, setInfo4] = useState("");
  const [info5, setInfo5] = useState("");
  const [info6, setInfo6] = useState("");
  const [info7, setInfo7] = useState("");
  const [info8, setInfo8] = useState("");
  const [info9, setInfo9] = useState("");
  // Add Function
  const addData = () => {
    const data = {
      E1_EnglishTestName: info1,
      E2_OverallScore: info3,
      E3_ListeningScore: info4,
      E4_ReadingScore: info5,
      E5_WritingScore: info6,
      E6_SpeakingScore: info7,
      E7_TestReferenceNumber: info8,
      E8_StudyInEnglish: info9,
    };

    englishAbilityRef
      .set(data, { merge: true }) // Use merge option to merge the new data with existing data
      .then(() => {
        setInfo1("");
        setInfo3("");
        setInfo4("");
        setInfo5("");
        setInfo6("");
        setInfo7("");
        setInfo8("");
        setInfo9("");
        Keyboard.dismiss();
        // Navigate to the next page or perform any other action
        navigation.navigate("Z_Test_Part_1", { documentId: documentId });
      })
      .catch((err) => {
        alert(err);
      });
  };
  // ----------- Backend Part Logic -----------
  // Fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let [loaded] = useFonts({
    Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);
  if (!fontsLoaded) {
    return null;
  }
  // Main Body
  return (
    <View>
      <ScrollView>
        {/* Heading */}
        <Text style={styles.Txt1}>3 - English Ability</Text>
        {/* --- Main Body --- */}
        {/* 1 */}
        <Text style={styles.inputTitleTxt}>English Test Name (PTE/IELTS)</Text>
        <TextInput
          placeholder=" Enter English Test Name (PTE/IELTS) "
          value={info1}
          onChangeText={(text) => setInfo1(text)}
          style={styles.inputTitle}
        />
        {/* 3 */}
        <Text style={styles.inputTitleTxt}>Overall Score</Text>
        <TextInput
          placeholder=" Enter Overall Score "
          value={info3}
          onChangeText={(text) => setInfo3(text)}
          style={styles.inputTitle}
          keyboardType="number-pad"
        />
        {/* 4 */}
        <Text style={styles.inputTitleTxt}>Listening Score</Text>
        <TextInput
          placeholder=" Enter Listening Score "
          value={info4}
          onChangeText={(text) => setInfo4(text)}
          style={styles.inputTitle}
          keyboardType="number-pad"
        />
        {/* 5 */}
        <Text style={styles.inputTitleTxt}>Reading Score</Text>
        <TextInput
          placeholder=" Enter Reading Score "
          value={info5}
          onChangeText={(text) => setInfo5(text)}
          style={styles.inputTitle}
          keyboardType="number-pad"
        />
        {/* 6 */}
        <Text style={styles.inputTitleTxt}>Writing Score</Text>
        <TextInput
          placeholder=" Enter Writing Score "
          value={info6}
          onChangeText={(text) => setInfo6(text)}
          style={styles.inputTitle}
          keyboardType="number-pad"
        />
        {/* 7 */}
        <Text style={styles.inputTitleTxt}>Speaking Score</Text>
        <TextInput
          placeholder=" Enter Speaking Score "
          value={info7}
          onChangeText={(text) => setInfo7(text)}
          style={styles.inputTitle}
          keyboardType="number-pad"
        />
        {/* 8 */}
        <Text style={styles.inputTitleTxt}>Test Reference Number</Text>
        <TextInput
          placeholder=" Enter Test Reference Number "
          value={info8}
          onChangeText={(text) => setInfo8(text)}
          style={styles.inputTitle}
        />
        {/* 9 */}
        <Text style={styles.inputTitleTxt}>Have you undertaken and completed any study where English is the language of instruction? </Text>
        <TextInput
          placeholder=" Enter Answer "
          value={info9}
          onChangeText={(text) => setInfo9(text)}
          style={styles.inputTitle}
        />
        {/* ----- Button ----- */}
        {/* 1 Btn */}
        <TouchableOpacity style={styles.Btn_Parent} onPress={addData}>
          <Text style={styles.Btn_Txt}>Add Data</Text>
        </TouchableOpacity>
        {/* 2 Btn */}
        <TouchableOpacity style={styles.Btn_Parent_1} onPress={() => navigation.navigate("Z_Test_Part_1")}>
          <Text style={styles.Btn_Txt}>Move To Page 4</Text>
        </TouchableOpacity>
        {/* 3 Btn */}
        <TouchableOpacity style={styles.Btn_Parent_1} onPress={() => navigation.navigate("Z_Test_1_A")}>
          <Text style={styles.Btn_Txt}>Move Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Txt1: {
    borderWidth: 1,
    borderColor: "yellow",
    backgroundColor: "yellow",
    fontFamily: "KanitBold",
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    letterSpacing: 1.5,
    fontSize: 20,
    marginVertical: 25,
  },
  inputTitleTxt: {
    marginTop: 1.5,
    paddingHorizontal: 25,
    fontFamily: "Heebo",
    fontSize: 12,
    letterSpacing: 1,
  },
  inputTitle: {
    marginTop: 1,
    borderWidth: 0.5,
    borderColor: "black",
    marginHorizontal: 25,
    borderRadius: 8,
    paddingHorizontal: 10,
    letterSpacing: 1.5,
    fontSize: 12,
    fontFamily: "Kanit",
  },
  Btn_Parent: {
    paddingVertical: 2,
    backgroundColor: "red",
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  Btn_Parent_1: {
    paddingVertical: 2,
    backgroundColor: "blue",
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  Btn_Txt: {
    paddingVertical: 2,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    fontSize: 16,
    color: "white",
    letterSpacing: 1,
  },
});
