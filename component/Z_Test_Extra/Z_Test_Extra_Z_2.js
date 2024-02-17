import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function Z_Test_Extra_Z_2({ route }) {
    // ---------- Backend Part Logic ----------
    const { item, firestoreId } = route.params || {};
    const [U1_universityName, setU1_universityName] = useState(item.U1_universityName || "");
    const [U4_courseName, setU4_courseName] = useState(item.U4_courseName || "");
    const [buttonValue, setbuttonValue] = useState(item.buttonValue || "");
    // ---------- Backend Part Logic ----------
    // Expo Font Logic
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let [loaded] = useFonts({
        Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
            <Text style={styles.fir}> Application Tracking & Status </Text>
            {/* Display Firestore ID */}
            <Text style={styles.Txt}>Firestore ID: {firestoreId}</Text>
            {/* Main */}
            <Text style={styles.Txt}>{U1_universityName.substring(0, 18)}</Text>
            <Text style={styles.Txt}>{U4_courseName}</Text>
            {/* Status Value */}
            <Text style={styles.Txt}>Status : {buttonValue}</Text>
        </View >
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fir: {
        borderWidth: 0.5,
        marginVertical: 30,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 20,
        backgroundColor: "aqua",
    },
    Txt: {
        borderWidth: 0.5,
        borderColor: "transparent",
        textAlign: "center",
        fontFamily: "Heebo",
        paddingVertical: 10,
        fontSize: 20,
        letterSpacing: 1,
    },
});
