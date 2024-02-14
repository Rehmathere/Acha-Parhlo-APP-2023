import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
// Firebase
import { firebase } from "../../firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function S_PersonalData_2() {
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
                navigation.navigate("S_PersonalData_3", { documentId: documentId });
            })
            .catch((err) => {
                alert(err);
            });
    }
    // ----------- Backend Part Logic -----------
    // Expo Font Logic
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let [loaded] = useFonts({
        Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
    });
    // It Will Load Font
    useEffect(() => {
        if (loaded) {
            setFontsLoaded(true);
        }
    }, [loaded]);
    // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
    if (!fontsLoaded) {
        return null;
    }
    // Main Body
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.fir_1}>Personal Detail</Text>
                {/* Information Area */}
                <View style={styles.Sec_Parent}>
                    {/* 1 */}
                    <Text style={styles.inputTitleTxt}>Title</Text>
                    <TextInput
                        placeholder=" Enter Title "
                        value={P1_title}
                        onChangeText={(text) => setP1_title(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 2 */}
                    <Text style={styles.inputTitleTxt}>Family Name as per Passport</Text>
                    <TextInput
                        placeholder=" Enter Family Name as per Passport "
                        value={P2_familyName}
                        onChangeText={(text) => setP2_familyName(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 3 */}
                    <Text style={styles.inputTitleTxt}>Given Name as per Passport</Text>
                    <TextInput
                        placeholder=" Enter Given Name as per Passport "
                        value={P3_givenName}
                        onChangeText={(text) => setP3_givenName(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 4 - Date */}
                    {/* 5 - Gender */}
                    {/* 6 */}
                    <Text style={styles.inputTitleTxt}>Country Of Birth</Text>
                    <TextInput
                        placeholder=" Enter Country Of Birth "
                        value={P4_countryOfBirth}
                        onChangeText={(text) => setP4_countryOfBirth(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 7 */}
                    <Text style={styles.inputTitleTxt}>City Of Birth</Text>
                    <TextInput
                        placeholder=" Enter City Of Birth "
                        value={P5_cityOfBirth}
                        onChangeText={(text) => setP5_cityOfBirth(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 8 */}
                    <Text style={styles.inputTitleTxt}>Country of Citizenship</Text>
                    <TextInput
                        placeholder=" Enter Country of Citizenship "
                        value={P6_countryOfCitizenship}
                        onChangeText={(text) => setP6_countryOfCitizenship(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 9 */}
                    <Text style={styles.inputTitleTxt}>Dual Citizen</Text>
                    <TextInput
                        placeholder=" Enter Dual Citizen "
                        value={P7_dualCitizen}
                        onChangeText={(text) => setP7_dualCitizen(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 10 */}
                    <Text style={styles.inputTitleTxt}>Email Address</Text>
                    <TextInput
                        placeholder=" Enter Email Address "
                        value={P8_email}
                        onChangeText={(text) => setP8_email(text)}
                        style={styles.inputTitle}
                        keyboardType="email-address"
                    />
                    {/* 11 */}
                    <Text style={styles.inputTitleTxt}>First Language Spoken</Text>
                    <TextInput
                        placeholder=" Enter First Language Spoken "
                        value={P9_firstLanguageSpoken}
                        onChangeText={(text) => setP9_firstLanguageSpoken(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 12 */}
                    <Text style={styles.inputTitleTxt}>Marital Status</Text>
                    <TextInput
                        placeholder=" Enter Marital Status "
                        value={P10_maritalStatus}
                        onChangeText={(text) => setP10_maritalStatus(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 13 */}
                    <Text style={styles.inputTitleTxt}>Have any medical or health issue that may prevent you from getting your visa</Text>
                    <TextInput
                        placeholder=" Enter Yes / No "
                        value={P11_medicalIssue}
                        onChangeText={(text) => setP11_medicalIssue(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 14 */}
                    <Text style={styles.inputTitleTxt}>Do you have disability, impairment or long term medical condition?</Text>
                    <TextInput
                        placeholder=" Enter Yes / No "
                        value={P12_disability}
                        onChangeText={(text) => setP12_disability(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 14 */}
                    <Text style={styles.inputTitleTxt}>Been convicted of any crime or offence in any Country</Text>
                    <TextInput
                        placeholder=" Enter Yes / No "
                        value={P13_crimeConviction}
                        onChangeText={(text) => setP13_crimeConviction(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 15 */}
                    <Text style={styles.inputTitleTxt}>Home Country Address with Suburb, City, State, Country & postcode</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={P14_homeCountryAddress}
                        onChangeText={(text) => setP14_homeCountryAddress(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 16 */}
                    <Text style={styles.inputTitleTxt}>Home Country Phone Number with Area & Country Code</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={P15_homeCountryPhoneNumber}
                        onChangeText={(text) => setP15_homeCountryPhoneNumber(text)}
                        style={styles.inputTitle}
                        keyboardType="number-pad"
                    />
                    {/* 17 */}
                    <Text style={styles.inputTitleTxt}>Visa refusal of Australia</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={P16_visaRefusal}
                        onChangeText={(text) => setP16_visaRefusal(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 18 */}
                    <Text style={styles.inputTitleTxt}>Been refused entry to any Country</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={P17_refusedEntry}
                        onChangeText={(text) => setP17_refusedEntry(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* Button */}
                    <TouchableOpacity style={styles.BtnBox} onPress={addData}>
                        <Text style={styles.BtnBoxTxt}>Confirm Proceed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fir_1: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 1,
        fontFamily: "HeeboExtra",
        paddingBottom: 25,
        textTransform: "uppercase",
        paddingTop: 60,
    },
    Sec_Parent: {
        // borderWidth: 0.5,
        marginVertical: 10,
        paddingVertical: 10,
    },
    inputTitle: {
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        borderRadius: 20,
        paddingVertical: 1.5,
        paddingLeft: 13,
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily: "Kanit",
        marginBottom: 15,
        textDecorationColor: "white",
    },
    inputTitleTxt: {
        marginHorizontal: 16,
        // borderWidth: 0.5,
        fontSize: 13,
        fontFamily: "Heebo",
        paddingVertical: 6,
        letterSpacing: 0.5,
        textTransform: "capitalize",
    },
    BtnBox: {
        marginVertical: 15,
        marginHorizontal: 16,
        borderColor: "#EB2F06",
        backgroundColor: "#EB2F06",
        borderWidth: 1,
        paddingVertical: 4.5,
        borderRadius: 20,
    },
    BtnBoxTxt: {
        color: "white",
        borderRadius: 20,
        borderColor: "transparent",
        borderWidth: 1,
        paddingVertical: 1,
        textAlign: "center",
        fontFamily: "Heebo",
        letterSpacing: 2.5,
        fontSize: 20,
    },
})
