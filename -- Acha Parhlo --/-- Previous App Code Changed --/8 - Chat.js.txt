import React, { useState, useEffect } from 'react'
// Fonts Header File
import { useFonts } from "expo-font";
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from "react-native";

export default function Chat() {
    // ---------- Font Family ----------
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
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
    // ---------- Font Family ----------
    // Main Body
    return (
        <View style={styles.container}>
            {/* Status Bar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Main Body */}
            {/* Image Parent */}
            <View style={styles.ParentImg}>
                <Image source={require('../Pics/chat_2.png')} style={styles.imgBox} />
            </View>
            <Text style={styles.fir2}>Get Connected With Our Experts</Text>
            <Text style={styles.fir3}>Engage in informative discussions and address your inquiries by conversing with our expert team through a dedicated chat platform.</Text>
            {/* Button Parent */}
            <View style={styles.BtnParent}>
                <TouchableOpacity style={styles.BtnPart1}>
                    <Text style={styles.BtnPart2}>Chat Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    ParentImg: {
        borderWidth: 0.5,
        paddingVertical: 30,
        display: "flex",
        justifyContent: "center",
        borderColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    imgBox: {
        borderWidth: 0.5,
        borderColor: "transparent",
        width: 220,
        height: 220,
    },
    fir2: {
        borderColor: "transparent",
        borderWidth: 0.5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        textAlign: "center",
        letterSpacing: 1,
        fontFamily: "HeeboExtra",
        fontSize: 30,
        color: "#4D4C4C",
    },
    fir3: {
        borderColor: "transparent",
        borderWidth: 0.5,
        paddingVertical: 11,
        paddingHorizontal: 30,
        textAlign: "center",
        letterSpacing: 1,
        fontFamily: "Kanit",
        fontSize: 13,
        textTransform: "capitalize",
        color: "#757473",
    },
    BtnParent: {
        // borderColor: "transparent",
        // borderWidth: 0.5,
        paddingTop: 25,
        paddingBottom: 10,
    },
    BtnPart1: {
        paddingVertical: 9,
        marginHorizontal: 40,
        textAlign: "center",
        backgroundColor: "#EB2F06",
        borderRadius: 20,
    },
    BtnPart2: {
        paddingVertical: 1,
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontFamily: "Heebo",
        letterSpacing: 3,
        borderRadius: 20,
        marginHorizontal: 10,
        textTransform:"uppercase"
    },
})
