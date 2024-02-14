import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
// Firebase
import { firebase } from "../firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Z_Test_2_A() {
  // Navigation
  const navigation = useNavigation();
  // ----------- Backend Part Logic -----------
  // Get the document ID passed from the first page
  const route = useRoute();
  const { documentId } = route.params;
  // Firebase
  const personalDetailRef = firebase.firestore().collection("4 - Student Records").doc(documentId);
  const [P1_title, setP1_title] = useState("");
  const [P2_familyName, setP2_familyName] = useState("");
  const [P3_givenName, setP3_givenName] = useState("");
  const [P4_countryOfBirth, setP4_countryOfBirth] = useState("");
  const [P5_cityOfBirth, setP5_cityOfBirth] = useState("");
  const [P6_countryOfCitizenship, setP6_countryOfCitizenship] = useState("");
  const [P7_dualCitizen, setP7_dualCitizen] = useState("");
  const [P8_email, setP8_email] = useState("");
  const [P9_firstLanguageSpoken, setP9_firstLanguageSpoken] = useState("");
  const [P10_maritalStatus, setP10_maritalStatus] = useState("");
  const [P11_medicalIssue, setP11_medicalIssue] = useState("");
  const [P12_disability, setP12_disability] = useState("");
  const [P13_crimeConviction, setP13_crimeConviction] = useState("");
  const [P14_homeCountryAddress, setP14_homeCountryAddress] = useState("");
  const [P15_homeCountryPhoneNumber, setP15_homeCountryPhoneNumber] = useState("");
  const [P16_visaRefusal, setP16_visaRefusal] = useState("");
  const [P17_refusedEntry, setP17_refusedEntry] = useState("");
  // Add Function
  const addData = () => {
    const data = {
      P1_title,
      P2_familyName,
      P3_givenName,
      P4_countryOfBirth,
      P5_cityOfBirth,
      P6_countryOfCitizenship,
      P7_dualCitizen,
      P8_email,
      P9_firstLanguageSpoken,
      P10_maritalStatus,
      P11_medicalIssue,
      P12_disability,
      P13_crimeConviction,
      P14_homeCountryAddress,
      P15_homeCountryPhoneNumber,
      P16_visaRefusal,
      P17_refusedEntry,
    };
    personalDetailRef
      .set(data, { merge: true }) // Use merge option to merge the new data with existing data
      .then(() => {
        // Reset state values after adding data
        setP1_title("");
        setP2_familyName("");
        setP3_givenName("");
        setP4_countryOfBirth("");
        setP5_cityOfBirth("");
        setP6_countryOfCitizenship("");
        setP7_dualCitizen("");
        setP8_email("");
        setP9_firstLanguageSpoken("");
        setP10_maritalStatus("");
        setP11_medicalIssue("");
        setP12_disability("");
        setP13_crimeConviction("");
        setP14_homeCountryAddress("");
        setP15_homeCountryPhoneNumber("");
        setP16_visaRefusal("");
        setP17_refusedEntry("");
        Keyboard.dismiss();
        // Navigate to the next page or perform any other action
        navigation.navigate("Z_Test_3_A", { documentId: documentId });
      })
      .catch((err) => {
        alert(err);
      });
  }
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
        <Text style={styles.Txt1}>2 - Personal Detail</Text>
        {/* --- Main Body --- */}
        {/* 1 */}
        <Text style={styles.Detail_Txt}>Title</Text>
        <TextInput
          placeholder=" Enter Title "
          value={P1_title}
          onChangeText={(text) => setP1_title(text)}
          style={styles.Inp_1}
        />
        {/* 2 */}
        <Text style={styles.Detail_Txt}>Family Name as per Passport</Text>
        <TextInput
          placeholder=" Enter Family Name as per Passport "
          value={P2_familyName}
          onChangeText={(text) => setP2_familyName(text)}
          style={styles.Inp_1}
        />
        {/* 3 */}
        <Text style={styles.Detail_Txt}>Given Name as per Passport</Text>
        <TextInput
          placeholder=" Enter Given Name as per Passport "
          value={P3_givenName}
          onChangeText={(text) => setP3_givenName(text)}
          style={styles.Inp_1}
        />
        {/* 4 - Date */}
        {/* 5 - Gender */}
        {/* 6 */}
        <Text style={styles.Detail_Txt}>Country Of Birth</Text>
        <TextInput
          placeholder=" Enter Country Of Birth "
          value={P4_countryOfBirth}
          onChangeText={(text) => setP4_countryOfBirth(text)}
          style={styles.Inp_1}
        />
        {/* 7 */}
        <Text style={styles.Detail_Txt}>City Of Birth</Text>
        <TextInput
          placeholder=" Enter City Of Birth "
          value={P5_cityOfBirth}
          onChangeText={(text) => setP5_cityOfBirth(text)}
          style={styles.Inp_1}
        />
        {/* 8 */}
        <Text style={styles.Detail_Txt}>Country of Citizenship</Text>
        <TextInput
          placeholder=" Enter Country of Citizenship "
          value={P6_countryOfCitizenship}
          onChangeText={(text) => setP6_countryOfCitizenship(text)}
          style={styles.Inp_1}
        />
        {/* 9 */}
        <Text style={styles.Detail_Txt}>Dual Citizen</Text>
        <TextInput
          placeholder=" Enter Dual Citizen "
          value={P7_dualCitizen}
          onChangeText={(text) => setP7_dualCitizen(text)}
          style={styles.Inp_1}
        />
        {/* 10 */}
        <Text style={styles.Detail_Txt}>Email Address</Text>
        <TextInput
          placeholder=" Enter Email Address "
          value={P8_email}
          onChangeText={(text) => setP8_email(text)}
          style={styles.Inp_1}
        />
        {/* 11 */}
        <Text style={styles.Detail_Txt}>First Language Spoken</Text>
        <TextInput
          placeholder=" Enter First Language Spoken "
          value={P9_firstLanguageSpoken}
          onChangeText={(text) => setP9_firstLanguageSpoken(text)}
          style={styles.Inp_1}
        />
        {/* 12 */}
        <Text style={styles.Detail_Txt}>Marital Status</Text>
        <TextInput
          placeholder=" Enter Marital Status "
          value={P10_maritalStatus}
          onChangeText={(text) => setP10_maritalStatus(text)}
          style={styles.Inp_1}
        />
        {/* 13 */}
        <Text style={styles.Detail_Txt}>Have any medical or health issue that may prevent you from getting your visa</Text>
        <TextInput
          placeholder=" Enter Yes / No "
          value={P11_medicalIssue}
          onChangeText={(text) => setP11_medicalIssue(text)}
          style={styles.Inp_1}
        />
        {/* 14 */}
        <Text style={styles.Detail_Txt}>Do you have a disability, impairment, or long-term medical condition?</Text>
        <TextInput
          placeholder=" Enter Yes / No "
          value={P12_disability}
          onChangeText={(text) => setP12_disability(text)}
          style={styles.Inp_1}
        />
        {/* 14 */}
        <Text style={styles.Detail_Txt}>Been convicted of any crime or offence in any Country</Text>
        <TextInput
          placeholder=" Enter Yes / No "
          value={P13_crimeConviction}
          onChangeText={(text) => setP13_crimeConviction(text)}
          style={styles.Inp_1}
        />
        {/* 15 */}
        <Text style={styles.Detail_Txt}>Home Country Address with Suburb, City, State, Country & postcode</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={P14_homeCountryAddress}
          onChangeText={(text) => setP14_homeCountryAddress(text)}
          style={styles.Inp_1}
        />
        {/* 16 */}
        <Text style={styles.Detail_Txt}>Home Country Phone Number with Area & Country Code</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={P15_homeCountryPhoneNumber}
          onChangeText={(text) => setP15_homeCountryPhoneNumber(text)}
          style={styles.Inp_1}
          keyboardType="number-pad"
        />
        {/* 17 */}
        <Text style={styles.Detail_Txt}>Visa refusal of Australia</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={P16_visaRefusal}
          onChangeText={(text) => setP16_visaRefusal(text)}
          style={styles.Inp_1}
        />
        {/* 18 */}
        <Text style={styles.Detail_Txt}>Been refused entry to any Country</Text>
        <TextInput
          placeholder=" Enter Answer "
          value={P17_refusedEntry}
          onChangeText={(text) => setP17_refusedEntry(text)}
          style={styles.Inp_1}
        />
        {/* ----- Button ----- */}
        {/* 1 Btn */}
        <TouchableOpacity style={styles.Btn_Parent} onPress={addData}>
          <Text style={styles.Btn_Txt}>Add Data</Text>
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
  Detail_Txt: {
    marginTop: 1.5,
    paddingHorizontal: 25,
    fontFamily: "Heebo",
    fontSize: 12,
    letterSpacing: 1,
  },
  Inp_1: {
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
