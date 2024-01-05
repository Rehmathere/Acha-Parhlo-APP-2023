import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
// useNavigation
import { useNavigation } from '@react-navigation/native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function Doc_HomeMain() {
    // 0 - useNavigation
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
            <View style={styles.DHM_first}>
                {/* Image Parent */}
                <View style={styles.DMH_Img_Parent}>
                    <Image source={require("../Pics/Docs_1.png")} style={styles.DMH_Img} />
                </View>
                <Text style={styles.DHM_fir_1}>You need to upload your</Text>
                <Text style={styles.DHM_fir_2}>Required Documents</Text>
                <Text style={styles.DHM_fir_1}>Please Upload Latest Documents</Text>
            </View>
            {/* 2 Documents Button */}
            <View style={styles.DMH_Button_Parent}>
                {/* Start */}
            </View>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // paddingVertical: 30,
    },
    DHM_first: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 18,
        paddingVertical: 30,
        backgroundColor: "#EB2F06",

    },
    DMH_Img_Parent: {
        // borderWidth: 0.5,
        borderColor: "white",
        paddingVertical: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    DMH_Img: {
        // borderWidth: 0.5,
        borderColor: "white",
        width: 100,
        height: 100,
    },
    DHM_fir_1: {
        // borderWidth: 0.5,
        marginVertical: 1.5,
        color: "white",
        textAlign: "center",
        fontFamily: "Kanit",
        fontSize: 14,
        paddingHorizontal: 20,
        textTransform: "capitalize",
    },
    DHM_fir_2: {
        // borderWidth: 0.5,
        color: "white",
        textAlign: "center",
        fontFamily: "HeeboExtra",
        fontSize: 28.5,
        letterSpacing: 1,
        paddingVertical: 2,
    },
    DMH_Button_Parent: {
        borderWidth: 0.5,
        paddingVertical: 20,
    },
});