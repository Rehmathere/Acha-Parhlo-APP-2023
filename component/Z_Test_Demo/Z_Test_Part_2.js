import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
// Add Function
import { firebase } from "../firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Z_Test_Part_2() {
  // Navigation
  const navigation = useNavigation();
  // ----------- Backend Part Logic -----------
  // Get the document ID passed from the previous page
  const route = useRoute();
  const { documentId } = route.params;
  const additionalDetailRef = firebase.firestore().collection("4 - Student Records").doc(documentId);
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [info4, setInfo4] = useState("");
  // Add Function
  const addData = () => {
    const data = {
      A1_FathersHighestQualification: info1,
      A2_MothersHighestQualification: info2,
      A3_GrantedScholarshipBefore: info3,
      A4_ApplyingForScholarship: info4,
    };
    additionalDetailRef
      .set(data, { merge: true }) // Use merge option to merge the new data with existing data
      .then(() => {
        setInfo1("");
        setInfo2("");
        setInfo3("");
        setInfo4("");
        Keyboard.dismiss();
        // Navigate to the next page or perform any other action
        navigation.navigate("Z_Test_Part_3", { documentId: documentId });
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
        <Text style={styles.Txt1}>5 - Additional Detail</Text>
        {/* --- Main Body --- */}
        {/* 1 */}
        <Text style={styles.inputTitleTxt}>Father's Highest Qualification</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={info1}
          onChangeText={(text) => setInfo1(text)}
          style={styles.inputTitle}
        />
        {/* 2 */}
        <Text style={styles.inputTitleTxt}>Mother's Highest Qualification</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={info2}
          onChangeText={(text) => setInfo2(text)}
          style={styles.inputTitle}
        />
        {/* 3 */}
        <Text style={styles.inputTitleTxt}>Have you granted Scholarship (Government or Private) before</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={info3}
          onChangeText={(text) => setInfo3(text)}
          style={styles.inputTitle}
        />
        {/* 4 */}
        <Text style={styles.inputTitleTxt}>Are you applying for Scholarship (Government or Private)</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={info4}
          onChangeText={(text) => setInfo4(text)}
          style={styles.inputTitle}
        />
        {/* ----- Button ----- */}
        {/* 1 Btn */}
        <TouchableOpacity style={styles.Btn_Parent} onPress={addData}>
          <Text style={styles.Btn_Txt}>Add Data</Text>
        </TouchableOpacity>
        {/* 2 Btn */}
        <TouchableOpacity style={styles.Btn_Parent_1} onPress={() => navigation.navigate("Z_Test_Part_3")}>
          <Text style={styles.Btn_Txt}>Move To Last Page</Text>
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
