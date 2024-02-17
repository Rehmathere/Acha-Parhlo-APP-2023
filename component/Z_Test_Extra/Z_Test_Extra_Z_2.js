import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function Z_Test_Extra_Z_2() {
    // 0 - Navigation Variable
    const navigation = useNavigation();
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
        <View style={styles.container}>
            <Text style={styles.fir}> Application Tracking & Status </Text>
            {/* Start */}
        </View>
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
});