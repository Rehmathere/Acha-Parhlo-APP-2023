import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// Fonts Header File
import { useFonts } from "expo-font";

export default function Success({ navigation }) {
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
    let [loaded] = useFonts({
        Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf")
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
        <View style={styles.container}>
            <Image source={require("../Pics/check.png")} style={styles.img} />
            <Text style={styles.txt}>Your Appointment Successfully Booked</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                <LinearGradient
                    style={styles.btn}
                    colors={['#009FFD', '#2A2A72']}
                >
                    <Text style={styles.btnTxt}>Return To Home</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 180,
        height: 180,
    },
    txt: {
        fontSize: 18,
        letterSpacing: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
        fontFamily:"Kanit",
        textAlign: "center",
    },
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 28,
        borderRadius: 20,
        marginTop: 5,
    },
    btnTxt: {
        color: "white",
        fontSize: 16,
        fontFamily:"Kanit",
        letterSpacing: 1.5,
    },
})