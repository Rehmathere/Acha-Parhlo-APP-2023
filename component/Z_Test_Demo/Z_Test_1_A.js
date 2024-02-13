import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
// Firebase
import { firebase } from "../firestore";

export default function Z_Test_1_A() {
    // Navigation
    const navigation = useNavigation();
    // ----------- Backend Part Logic -----------
    const universityRef = firebase.firestore().collection("4 - Student Records");
    const [U1_universityName, setU1_universityName] = useState("");
    const [U2_campus, setU2_campus] = useState("");
    const [U3_intake, setU3_intake] = useState("");
    const [U4_courseName, setU4_courseName] = useState("");
    // Add Function
    const addData = () => {
        if (U1_universityName && U1_universityName.length > 0 && U2_campus && U3_intake && U4_courseName) {
            const data = {
                U1_universityName,
                U2_campus,
                U3_intake,
                U4_courseName,
            };
            const docRef = universityRef.doc(); // Create a new document with a random ID
            docRef
                .set(data)
                .then(() => {
                    // Pass the document ID to the next page
                    navigation.navigate("Z_Test_2_A", { documentId: docRef.id });
                    setU1_universityName("");
                    setU2_campus("");
                    setU3_intake("");
                    setU4_courseName("");
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
        <View>
            <ScrollView>
                {/* Heading */}
                <Text style={styles.Txt1}>1 - University Detail</Text>
                {/* --- Main Body --- */}
                {/* Text Input */}
                <Text style={styles.Detail_Txt}>1 - University Name :</Text>
                <TextInput
                    placeholder=' Enter University Name '
                    onChangeText={(text) => setU1_universityName(text)}
                    value={U1_universityName}
                    keyboardType="default"
                    style={styles.Inp_1}
                />
                {/* Text Input */}
                <Text style={styles.Detail_Txt}>2 - Campus :</Text>
                <TextInput
                    placeholder=' Enter Campus '
                    onChangeText={(text) => setU2_campus(text)}
                    value={U2_campus}
                    keyboardType="default"
                    style={styles.Inp_1}
                />
                {/* Text Input */}
                <Text style={styles.Detail_Txt}>3 - Intake :</Text>
                <TextInput
                    placeholder=' Enter Intake '
                    onChangeText={(text) => setU3_intake(text)}
                    value={U3_intake}
                    keyboardType="default"
                    style={styles.Inp_1}
                />
                {/* Text Input */}
                <Text style={styles.Detail_Txt}>4 - Course Name as per University Website :</Text>
                <TextInput
                    placeholder=' Enter Course '
                    onChangeText={(text) => setU4_courseName(text)}
                    value={U4_courseName}
                    keyboardType="default"
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
        marginVertical: 0,
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
