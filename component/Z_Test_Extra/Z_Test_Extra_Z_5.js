import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView, StatusBar, Image } from 'react-native';
import { firebase } from "../firestore";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import * as ImageManipulator from 'expo-image-manipulator';

export default function Z_Test_Extra_Z_5({ route }) {
    // Navigation
    const navigation = useNavigation();
    // ----- Image Route Logic -----
    const item = route.params?.item || {};
    const [U_Extra_Uni_Image, setU_Extra_Uni_Image] = useState(item.MyImage || "");
    // ----- Image Route Logic -----
    // ----------- Backend Part Logic -----------
    const universityRef = firebase.firestore().collection("New Practice App");
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
                    navigation.navigate("Z_Test_Extra_Z_1", { documentId: docRef.id });
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
        <View style={styles.container}>
            <ScrollView>
                {/* Status Bar */}
                <StatusBar backgroundColor={"red"} />
                {/* Heading */}
                <Text style={styles.Txt1}>Page 5 - ( 5 )</Text>
                {/* Image Area */}
                <View style={styles.SMH_First_Logo}>
                    <View style={styles.SMH_FirstImg_Parent}>
                        {U_Extra_Uni_Image ? (
                            <Image source={{ uri: U_Extra_Uni_Image }} style={styles.SMH_FirstImg} />
                        ) : null}
                    </View>
                </View>
                {/* Image Area */}
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
                    {/* 1 */}
                    <TouchableOpacity style={styles.BtnBox} onPress={addData}>
                        <Text style={styles.BtnBoxTxt}>Confirm Proceed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BFF8E4",
    },
    SMH_First_Logo: {
        borderWidth: 0.5,
        paddingVertical: 5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
    },
    SMH_FirstImg_Parent: {
        width: 80,
        height: 80,
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        borderRadius: 5,
        padding: 2,
    },
    SMH_FirstImg: {
        width: "100%",
        height: "100%",
    },
    Txt1: {
        borderWidth: 0.5,
        borderColor: "blue",
        backgroundColor: "blue",
        fontFamily: "HeeboExtra",
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "center",
        letterSpacing: 1.5,
        fontSize: 20,
        marginVertical: 10,
        color: "white",
    },
    Upload_Btn_Parent: {
        backgroundColor: "black",
        borderWidth: 0.5,
        borderColor: "transparent",
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    Upload_Btn_Parent_Txt: {
        textAlign: "center",
        borderWidth: 0.5,
        borderColor: "transparent",
        fontSize: 18,
        fontFamily: "Kanit",
        color: "white",
        letterSpacing: 1,
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
        paddingVertical: 1,
        paddingLeft: 20,
        fontSize: 14,
        letterSpacing: 2,
        fontFamily: "Kanit",
        marginBottom: 17,
        textDecorationColor: "white",
        backgroundColor: "white",
    },
    inputTitleTxt: {
        marginHorizontal: 16,
        // borderWidth: 0.5,
        fontSize: 12,
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
});