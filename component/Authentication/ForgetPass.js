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
    Image,
    ScrollView
} from "react-native";
// Import Extra
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

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
                    <View style={styles.E_Img_Box}>
                        <Image source={require("../Pics/E_Pass_Login.png")} style={styles.E_Img} />
                    </View>
                    <Text style={styles.fir_1}>Forgot Password <AntDesign name="questioncircle" size={23} color="black" /></Text>
                    <Text style={styles.fir_2}>Enter Your Email & we'll send you instructions to reset your password</Text>
                    {/* Input 1 */}
                    <View style={styles.New_Sec_Part_2_1}>
                        <Text style={styles.New_Sec_Part_2_1_Part_1}><MaterialIcons name="email" size={20} color="black" /></Text>
                        <TextInput
                            style={styles.New_Sec_Part_2_1_Part_2}
                            placeholder=" Enter Your Email For Reset "
                            onChangeText={(email) => setEmail(email)}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity style={styles.BtnBox} onPress={() => forgetPassword()}>
                        <Text style={styles.BtnText}>Reset Password</Text>
                    </TouchableOpacity>
                    <Text style={styles.third} onPress={() => navigation.navigate("Login")}>Back To Sign In</Text>
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
        // backgroundColor: "white",
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
        borderWidth: 0,
        paddingVertical: 25,
        paddingHorizontal: 15,
        width: "80%",
        borderRadius: 1,
        // backgroundColor: "#E0DFDF",
        backgroundColor: "white",
        // borderColor: "transparent", // Set border color to transparent
        shadowColor: "black", // Set shadow color to black
        shadowOffset: { width: 0, height: 2 }, // Adjust shadow offset as needed
        shadowOpacity: 0.5, // Adjust shadow opacity as needed
        shadowRadius: 5, // Adjust spread of shadow as needed
        elevation: 15, // Set elevation to 0 to prevent shadow on Android
    },
    fir_1: {
        // borderWidth: 0.5,
        paddingVertical: 4,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 25,
        letterSpacing: 0.5,
    },
    fir_2: {
        marginTop: 1,
        // borderWidth: 0.5,
        paddingHorizontal: 5,
        paddingVertical: 10,
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
        fontSize: 12,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 7,
        paddingHorizontal: 10,
        paddingVertical: 1,
        fontFamily: "Kanit",
        letterSpacing: 2,
    },
    BtnBox: {
        backgroundColor: "#EB2F06",
        paddingVertical: 6,
        borderRadius: 20,
        marginHorizontal: 20,
    },
    BtnText: {
        // borderWidth: 0.5,
        paddingVertical: 0,
        borderRadius: 30,
        marginHorizontal: 0,
        textAlign: "center",
        letterSpacing: 3,
        fontFamily: "Kanit",
        color: "white",
        fontSize: 15.5,
    },
    third: {
        // borderWidth: 0.5,
        marginTop: 15,
        textAlign: "center",
        fontFamily: "Heebo",
        letterSpacing: 1,
        paddingVertical: 5,
        color: "#EB2F06",
        fontSize: 13,
    },
    E_Img_Box: {
        borderWidth: 0,
        paddingVertical: 10,
    },
    E_Img: {
        borderWidth: 0,
        borderColor: "black",
        paddingVertical: 1,
        width: 50,
        height: 50,
        alignSelf: "center",
    },
    New_Sec_Part_2_1: {
        backgroundColor: "white",
        borderBottomWidth: 1.3,
        borderBottomColor: "#EB2F06",
        width: "90%",
        alignSelf: "center",
        padding: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 25,
    },
    New_Sec_Part_2_1_Part_1: {
        borderWidth: 0,
        paddingVertical: 5.5,
        width: "12%",
        // backgroundColor: "lightgreen",
        textAlign: "center",
    },
    New_Sec_Part_2_1_Part_2: {
        // backgroundColor: "lightgreen",
        borderWidth: 0,
        paddingVertical: 0.5,
        width: "88%",
        paddingHorizontal: 5,
        fontFamily: "Kanit",
        letterSpacing: 1.8,
        fontSize: 12,
    },
});



