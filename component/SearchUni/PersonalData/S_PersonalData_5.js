import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
// Firebase
import { firebase } from "../../firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function S_PersonalData_5() {
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
                navigation.navigate("S_PersonalData_6", { documentId: documentId });
            })
            .catch((err) => {
                alert(err);
            });
    };
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
                <Text style={styles.fir_1}>Additional Detail</Text>
                {/* Information Area */}
                <View style={styles.Sec_Parent}>
                    {/* 1 */}
                    <Text style={styles.inputTitleTxt}>Father's Highest Qualification</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info1}
                        onChangeText={(text) => setInfo1(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 2 */}
                    <Text style={styles.inputTitleTxt}>Mother's Highest Qualification</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info2}
                        onChangeText={(text) => setInfo2(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 3 */}
                    <Text style={styles.inputTitleTxt}>Have you granted Scholarship (Government or Private) before</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info3}
                        onChangeText={(text) => setInfo3(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 4 */}
                    <Text style={styles.inputTitleTxt}>Are you applying for Scholarship (Government or Private)</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info4}
                        onChangeText={(text) => setInfo4(text)}
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
