import React, { useState, useEffect } from 'react'
// Fonts Header File
import { useFonts } from "expo-font";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from "react-native";
// Import Extra
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function ForgetPass() {
    // Navigation Variable
    const navigation = useNavigation();
    // useState
    const [email, setEmail] = useState("");
    // Change Password
    const forgetPassword = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                alert(" Password Reset Email Sent ");
            })
            .catch((error) => {
                alert(error);
            });
    };
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
            {/* Status Bar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Main Body */}
            <View style={styles.BoxParent}>
                {/* Box */}
                <View style={styles.Box}>
                    <Text style={styles.fir_1}>Forgot Password <AntDesign name="questioncircle" size={23} color="black" /></Text>
                    <Text style={styles.fir_2}>Enter Your Email & we'll send you instructions to reset your password</Text>
                    <TextInput
                        style={[styles.sec, { marginBottom: 17 }]}
                        placeholder=" Enter Your Email For Reset "
                        onChangeText={(email) => setEmail(email)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity style={styles.BtnBox} onPress={() => forgetPassword()}>
                        <Text style={styles.BtnText}>Reset Password</Text>
                    </TouchableOpacity>
                    <Text style={styles.third} onPress={() => navigation.navigate("Login")}><Ionicons name="caret-back-outline" size={13} color="#EB2F06" /> Back To Sign In</Text>
                </View>
            </View>
            {/* Start */}
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    BoxParent: {
        borderWidth: 0.5,
        borderColor: "transparent",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    Box: {
        borderWidth: 0.5,
        paddingVertical: 39,
        paddingHorizontal: 14,
        width: "87%",
        borderRadius: 10,
        // backgroundColor: "#E0DFDF",
        backgroundColor: "#F9F9F9",
        borderColor: "grey",
    },
    fir_1: {
        // borderWidth: 0.5,
        paddingVertical: 3,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 25,
        letterSpacing: 0.5,
    },
    fir_2: {
        marginTop: 1,
        // borderWidth: 0.5,
        padding: 5,
        textAlign: "center",
        fontFamily: "Kanit",
        fontSize: 11.5,
        letterSpacing: 0.5,
        textTransform: "capitalize",
    },
    sec: {
        borderColor: "grey",
        // backgroundColor: "#FFEDE8",
        borderWidth: 0.5,
        color: "black",
        fontSize: 13.9,
        marginTop: 12,
        borderRadius: 10,
        marginBottom: 12,
        marginHorizontal: 7,
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontFamily: "Kanit",
        letterSpacing: 0.8,
    },
    BtnBox: {
        backgroundColor: "#EB2F06",
        paddingVertical: 7.5,
        borderRadius: 30,
        marginHorizontal: 9,
    },
    BtnText: {
        // borderWidth: 0.5,
        paddingVertical: 1,
        borderRadius: 30,
        marginHorizontal: 9,
        textAlign: "center",
        letterSpacing: 1.8,
        fontFamily: "Heebo",
        color: "white",
        fontSize: 19,
    },
    third: {
        // borderWidth: 0.5,
        marginTop: 15,
        textAlign: "center",
        fontFamily: "Heebo",
        letterSpacing: 1,
        paddingVertical: 5,
        color: "#EB2F06",
    },
});



