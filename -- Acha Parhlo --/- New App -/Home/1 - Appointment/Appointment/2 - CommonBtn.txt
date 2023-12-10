import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
// Fonts Header File
import { useFonts } from "expo-font";

export default function CommonBtn({ w, h, txt, onClick, status }) {
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
    // Main Body
    return (
        <TouchableOpacity onPress={() => { onClick() }}>
            {status ? (
                <LinearGradient
                    colors={['#009FFD', '#2A2A72']}
                    style={{
                        width: w, height: h, justifyContent: "center", alignItems: "center", marginVertical: 7, marginHorizontal: 8, borderRadius: 12, paddingVertical: 2,
                    }}>
                    <Text style={{ color: "white", fontSize: 13, padding: 1, fontFamily:"Kanit", letterSpacing: 0.5, }}>{txt}</Text>
                </LinearGradient>) : (
                <LinearGradient
                    colors={['#8e8e8e', '#8e8e8e']}
                    style={{
                        width: "89%", height: 25, justifyContent: "center", alignItems: "center", marginVertical: 7, marginHorizontal: 8, borderRadius: 12, paddingVertical: 2, opacity: 0.9,
                    }}>
                    <Text style={{ color: "white", fontSize: 14.2, padding: 1, fontFamily:"Kanit", letterSpacing: 0.5, }}>{txt}</Text>
                </LinearGradient>
            )}
        </TouchableOpacity>
    )
}
