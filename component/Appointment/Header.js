import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function Header({ Title, icon, onClick }) {
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
    // MAin Body     
    return (
        <View style={styles.header}>
            {/* Start */}
            {/* 1 - Header Back Button */}
            <TouchableOpacity style={styles.img_parent} onPress={() => { onClick() }}>
                <Image source={icon} style={styles.img} />
            </TouchableOpacity>
            {/* 2 - Header Text Title */}
            <Text style={styles.title}>{Title}</Text>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    header: {
        height: 60,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        elevation: 13,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    img_parent: {
        // borderWidth: 1,
        // borderColor: "black",
        padding: 2,
        width: 42,
        height: 42,
        flexDirection: "row",
    },
    img: {
        // borderWidth: 1,
        // borderColor: "black",
        width: 36,
        height: 36,
    },
    title: {
        fontSize: 22,
        fontFamily:"Heebo",
        marginLeft: 10,
        letterSpacing: 1,
    },
})