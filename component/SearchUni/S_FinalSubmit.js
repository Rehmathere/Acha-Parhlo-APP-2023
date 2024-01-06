import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
// useNavigate
import { useNavigation } from '@react-navigation/native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function S_FinalSubmit() {
    // 0 - useNavigate
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
            <View style={styles.ParentImg}>
                <Image source={require('../Pics/S_FS_1.png')} style={styles.myimg} />
            </View>
            <Text style={styles.Txt}>Your Application Is Successfully Submitted</Text>
            <View style={styles.BtnParent}>
                <TouchableOpacity style={styles.S_Btn_Box} onPress={() => navigation.navigate('SubMainHome')}>
                    <Text style={styles.S_Btn_Box_Text}>Go To Dashboard</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EB2F06",
        justifyContent: "center",
        alignItems: "center",
    },
    ParentImg: {
        // borderWidth: 0.5,
        width: "100%",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    myimg: {
        width: 105,
        height: 105,
        // borderWidth: 0.5,
        // borderColor: "black",
    },
    Txt: {
        // borderWidth: 0.5,
        borderColor: "white",
        fontFamily: "Kanit",
        fontSize: 14,
        textAlign: "center",
        letterSpacing: 1,
        color: "white",
    },
    BtnParent: {
        // borderWidth: 0.5,
        // borderColor: "white",
        paddingVertical: 33,
        width: "100%",
    },
    S_Btn_Box: {
        borderWidth: 0.5,
        borderColor: "white",
        marginHorizontal: 55,
        paddingVertical: 5,
        backgroundColor: "#E3DAD7",
        borderRadius: 25,
    },
    S_Btn_Box_Text: {
        // borderWidth: 0.5,
        paddingVertical: 5,
        fontFamily: "HeeboExtra",
        textAlign: "center",
        fontSize: 17,
        letterSpacing: 3,
        color: "#EB2F06",
    },
})
