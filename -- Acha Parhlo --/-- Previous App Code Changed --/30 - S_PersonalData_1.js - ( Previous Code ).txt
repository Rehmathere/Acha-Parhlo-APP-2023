import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Keyboard, Image } from 'react-native'
// useNavigate
import { useNavigation } from '@react-navigation/native'
// Fonts Header File
import { useFonts } from "expo-font";
// Firebase
import { firebase } from "../../firestore";
import * as ImageManipulator from 'expo-image-manipulator';

export default function S_PersonalData_1({ route }) {
    // Navigation
    const navigation = useNavigation();
    // ----- Image Route Logic -----
    const item = route.params?.item || {};
    const [U_Extra_Uni_Image, setU_Extra_Uni_Image] = useState(item.MyImage || "");
    // ----- Image Route Logic -----
    // ----------- Backend Part Logic -----------
    const universityRef = firebase.firestore().collection("4 - Student Records");
    const [U1_universityName, setU1_universityName] = useState("");
    const [U2_campus, setU2_campus] = useState("");
    const [U3_intake, setU3_intake] = useState("");
    const [U4_courseName, setU4_courseName] = useState("");
    // Add Function
    const addData = async () => {
        if (U1_universityName && U1_universityName.length > 0 && U2_campus && U3_intake && U4_courseName) {
            let base64Image = '';
            if (U_Extra_Uni_Image) {
                const manipResult = await ImageManipulator.manipulateAsync(
                    U_Extra_Uni_Image,
                    [{ resize: { width: 300 } }],
                    { compress: 0.5, format: ImageManipulator.SaveFormat.PNG, base64: true } // Ensure the format is PNG
                );
                base64Image = `data:image/png;base64,${manipResult.base64}`; // Ensure the base64 path is correct
            }
            const data = {
                U1_universityName,
                U2_campus,
                U3_intake,
                U4_courseName,
                U_Extra_Uni_Image: base64Image // Add base64Image to the data
            };
            const docRef = universityRef.doc(); // Create a new document with a random ID
            docRef
                .set(data)
                .then(() => {
                    // Pass the document ID to the next page
                    navigation.navigate("S_PersonalData_2", { documentId: docRef.id });
                    setU1_universityName("");
                    setU2_campus("");
                    setU3_intake("");
                    setU4_courseName("");
                    setU_Extra_Uni_Image("");
                    Keyboard.dismiss();
                })
                .catch((err) => {
                    alert(err);
                });
        }
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
                <Text style={styles.fir_1}>University Detail</Text>
                {/* Information Area */}
                <View style={styles.Sec_Parent}>
                    {/* 1 */}
                    <Text style={styles.inputTitleTxt}>University Name</Text>
                    <TextInput
                        placeholder=" Enter University Name "
                        value={U1_universityName}
                        onChangeText={(text) => setU1_universityName(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 2 */}
                    <Text style={styles.inputTitleTxt}>Campus Name</Text>
                    <TextInput
                        placeholder=" Enter Campus Name "
                        value={U2_campus}
                        onChangeText={(text) => setU2_campus(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 3 */}
                    <Text style={styles.inputTitleTxt}>Intake</Text>
                    <TextInput
                        placeholder=" Enter Intake "
                        value={U3_intake}
                        onChangeText={(text) => setU3_intake(text)}
                        style={styles.inputTitle}
                        keyboardType="default"
                    />
                    {/* 4 */}
                    <Text style={styles.inputTitleTxt}>Course Name as per University Website</Text>
                    <TextInput
                        placeholder=" Enter Course Name "
                        value={U4_courseName}
                        onChangeText={(text) => setU4_courseName(text)}
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
        // backgroundColor: "white",
    },
    SMH_First_Logo: {
        borderWidth: 0.5,
        paddingVertical: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },
    SMH_FirstImg_Parent: {
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        borderRadius: 5,
        padding: 2,
    },
    SMH_FirstImg: {
        width: "100%",
        height: "100%",
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
        paddingLeft: 20,
        fontSize: 15,
        letterSpacing: 1,
        fontFamily: "Kanit",
        marginBottom: 17,
        textDecorationColor: "white",
    },
    inputTitleTxt: {
        marginHorizontal: 16,
        // borderWidth: 0.5,
        fontSize: 13.5,
        fontFamily: "Heebo",
        paddingVertical: 6,
        letterSpacing: 0.7,
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
