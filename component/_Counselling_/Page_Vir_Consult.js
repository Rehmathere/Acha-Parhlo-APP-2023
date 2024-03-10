import React, { useState, useEffect } from 'react'
// Fonts Header File
import { useFonts } from "expo-font";
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Page_Vir_Consult() {
    // Navigation
    const navigation = useNavigation();
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
                <Image source={require('../Pics/AI_Chat.jpg')} style={styles.imgBox} />
            </View>
            <Text style={styles.fir2}>Ask Anything</Text>
            <Text style={styles.fir3}>Ask Anything From Our Highly Customized AI Chat Bot</Text>
            {/* Button Parent */}
            <View style={styles.BtnParent}>
                <TouchableOpacity style={styles.BtnPart1} onPress={() => navigation.navigate("Virtual_Counselling")}>
                    <Text style={styles.BtnPart2}>Ask Anything</Text>
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
        paddingVertical: 50,
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
        fontFamily: "Archivo",
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
        marginHorizontal: 50,
        textAlign: "center",
        backgroundColor: "#EB2F06",
        borderRadius: 20,
    },
    BtnPart2: {
        paddingVertical: 1,
        textAlign: "center",
        fontSize: 19,
        color: "white",
        fontFamily: "Kanit",
        letterSpacing: 3.5,
        borderRadius: 20,
        marginHorizontal: 5,
        textTransform: "uppercase"
    },
})
