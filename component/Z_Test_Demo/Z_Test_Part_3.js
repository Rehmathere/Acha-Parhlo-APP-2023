import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
// Firebase
import { firebase } from "../firestore";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Z_Test_Part_3() {
    // Navigation
    const navigation = useNavigation();
    // ----------- Backend Part Logic -----------
    // Get the document ID passed from the previous page
    const route = useRoute();
    const { documentId } = route.params;
    const bachelorDetailRef = firebase.firestore().collection("4 - Student Records").doc(documentId);
    const [info1, setInfo1] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");
    const [info6, setInfo6] = useState("");
    const [info7, setInfo7] = useState("");
    const [info8, setInfo8] = useState("");
    const [info9, setInfo9] = useState("");
    const [info10, setInfo10] = useState("");
    const [info11, setInfo11] = useState("");
    // Add Function
    const addData = () => {
        const data = {
            B1_UniversityName: info1,
            B2_ProgramName: info2,
            B3_CourseLengthMedium: info3,
            B4_Country: info4,
            B5_MonthYearStarted: info5,
            B6_MonthYearFinished: info6,
            B7_CompleteIncompleteWithdrawn: info7,
            B8_IfIncompleteThenWhenFinish: info8,
            B9_IfIncompleteThenResultAvailableDate: info9,
            B10_ApplyingForCredits: info10,
            B11_CompletedMastersDegree: info11,
        };
        bachelorDetailRef
            .set(data, { merge: true }) // Use merge option to merge the new data with existing data
            .then(() => {
                setInfo1("");
                setInfo2("");
                setInfo3("");
                setInfo4("");
                setInfo5("");
                setInfo6("");
                setInfo7("");
                setInfo8("");
                setInfo9("");
                setInfo10("");
                setInfo11("");
                Keyboard.dismiss();
                // Navigate to the next page or perform any other action
                navigation.navigate("Z_Test_Part_D1", { documentId: documentId });
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
                <Text style={styles.Txt1}>6 - Bachelor Detail</Text>
                {/* --- Main Body --- */}
                {/* 1 */}
                <Text style={styles.inputTitleTxt}>University Name</Text>
                <TextInput
                    placeholder=" Enter University Name "
                    value={info1}
                    onChangeText={(text) => setInfo1(text)}
                    style={styles.inputTitle}
                />
                {/* 2 */}
                <Text style={styles.inputTitleTxt}>Program Name</Text>
                <TextInput
                    placeholder=" Enter Program Name "
                    value={info2}
                    onChangeText={(text) => setInfo2(text)}
                    style={styles.inputTitle}
                />
                {/* 3 */}
                <Text style={styles.inputTitleTxt}>Course Length - Medium (Language) of Instruction</Text>
                <TextInput
                    placeholder=" Enter Answer "
                    value={info3}
                    onChangeText={(text) => setInfo3(text)}
                    style={styles.inputTitle}
                />
                {/* 4 */}
                <Text style={styles.inputTitleTxt}>Country</Text>
                <TextInput
                    placeholder=" Enter Country "
                    value={info4}
                    onChangeText={(text) => setInfo4(text)}
                    style={styles.inputTitle}
                />
                {/* 5 */}
                <Text style={styles.inputTitleTxt}>Month / Year Started</Text>
                <TextInput
                    placeholder=" Enter Month / Year Started "
                    value={info5}
                    onChangeText={(text) => setInfo5(text)}
                    style={styles.inputTitle}
                />
                {/* 6 */}
                <Text style={styles.inputTitleTxt}>Month / Year Finished</Text>
                <TextInput
                    placeholder=" Enter Month / Year Finished "
                    value={info6}
                    onChangeText={(text) => setInfo6(text)}
                    style={styles.inputTitle}
                />
                {/* 7 */}
                <Text style={styles.inputTitleTxt}>Complete or Incomplete or Withdrawn</Text>
                <TextInput
                    placeholder=" Enter Answer "
                    value={info7}
                    onChangeText={(text) => setInfo7(text)}
                    style={styles.inputTitle}
                />
                {/* 8 */}
                <Text style={styles.inputTitleTxt}>If incomplete then when will finish</Text>
                <TextInput
                    placeholder=" Enter Answer "
                    value={info8}
                    onChangeText={(text) => setInfo8(text)}
                    style={styles.inputTitle}
                />
                {/* 9 */}
                <Text style={styles.inputTitleTxt}>If incomplete then result available Date</Text>
                <TextInput
                    placeholder=" Enter Answer "
                    value={info9}
                    onChangeText={(text) => setInfo9(text)}
                    style={styles.inputTitle}
                />
                {/* 10 */}
                <Text style={styles.inputTitleTxt}>Are you applying for Credits base on this study</Text>
                <TextInput
                    placeholder=" Enter Answer "
                    value={info10}
                    onChangeText={(text) => setInfo10(text)}
                    style={styles.inputTitle}
                />
                {/* 11 */}
                <Text style={styles.inputTitleTxt}>Have you completed a master's degree?</Text>
                <TextInput
                    placeholder=" Enter Answer "
                    value={info11}
                    onChangeText={(text) => setInfo11(text)}
                    style={styles.inputTitle}
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

