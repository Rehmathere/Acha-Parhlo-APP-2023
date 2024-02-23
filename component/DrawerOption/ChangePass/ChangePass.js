import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Modal, Image, TextInput } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
// useNavigate
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../../firestore";

export default function ChangePass() {
    // Modal
    // Modal useState
    const [showStatus, setShowStatus] = useState(false)
    // -------- Dashboard Logic ----------
    // useState
    const [email, setEmail] = useState("");
    // Change Password
    const changePassword = () => {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
            .then(() => {
                // Display
                setShowStatus(true)
                // Not Display
                setTimeout(() => {
                    setShowStatus(false)
                }, 2500);
            }).catch((error) => {
                alert(error)
            })
    }
    // useEffect
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    // Get the user's email
                    const userEmail = user.email;
                    // Update the state with the user's email
                    setEmail(userEmail);
                } else {
                    console.log("User not logged in");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);
    // -------- Dashboard Logic ----------
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
    let [loaded] = useFonts({
        Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
            {/* StatusBar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Body */}
            <View style={styles.FirTxtParent}>
                <Text style={styles.FirTxt}>Reset Password</Text>
            </View>
            {/* Image */}
            <View style={styles.FirImgParent}>
                <Image source={require('../../Pics/Password_E.png')} style={styles.FirImg} />
            </View>
            {/* Leaving Message */}
            <View style={styles.FirTxtParent2}>
                <Text style={styles.FirTxt2}>Please Enter Your Email Where We Send Link To Reset Your Password</Text>
            </View>
            {/* Input */}
            <TextInput placeholder=' Enter Your Email ' onChangeText={(email) => setEmail(email)} value={email} style={styles.inp} keyboardType="email-address" />
            {/* Button */}
            <View style={styles.TwoBtnParent}>
                {/* 2 */}
                <TouchableOpacity style={styles.Fir_But} onPress={() => { changePassword(); }}>
                    <Text style={styles.Fir_But_Txt} >Send Link</Text>
                </TouchableOpacity>
            </View>
            {/* Logout Modal */}
            <Modal
                transparent={true}
                animationType="fade"
                visible={showStatus}
            >
                <View style={styles.ParentStatus}>
                    <View style={styles.sub_ParentStatus}>
                        <View style={styles.ParentStatusImg}>
                            <Image source={require('../../Pics/send.png')} style={styles.StatusImg} />
                        </View>
                        <Text style={styles.StatusTxt}>Reset Password Link Has Send {'\n'} Please Check</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    inp: {
        borderWidth: 0.5,
        borderColor: "grey",
        marginHorizontal: 40,
        marginVertical: 15,
        borderRadius: 10,
        fontSize: 13,
        paddingHorizontal: 15,
        paddingVertical: 3,
        fontFamily: "Kanit",
        letterSpacing: 2.5,
    },
    fir_1: {
        // borderWidth: 0.5,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Heebo",
    },
    Modal_Parent: {
        flex: 1,
        // borderWidth: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        justifyContent: "center",
        alignItems: "center",
    },
    Modal_Child: {
        // borderWidth: 0.5,
        borderColor: "white",
        backgroundColor: "white",
        marginHorizontal: 40,
        borderRadius: 30,
        paddingVertical: 13,
        paddingHorizontal: 11,
        width: "75%",
    },
    sub_Modal_Child: {
        // borderWidth: 0.5,
        padding: 10,
    },
    Modal_Txt_1: {
        // borderWidth: 0.5,
        fontSize: 23,
        fontFamily: "HeeboExtra",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        paddingBottom: 1,
        paddingTop: 1,
    },
    Modal_Txt_2: {
        // borderWidth: 0.5,
        fontSize: 14.5,
        marginVertical: 4,
        fontFamily: "Kanit",
        textAlign: "center",
        color: "grey",
    },
    Butt_Parent: {
        // borderWidth: 0.5,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    sub_Butt_Parent: {
        // borderWidth: 1,
        borderColor: "red",
    },
    Butt_Box_1: {
        // borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: "#EB2F06",
    },
    Butt_Text_1: {
        // borderWidth: 1,
        fontSize: 16,
        fontFamily: "Kanit",
        textAlign: "center",
        color: "white",
        letterSpacing: 1.5,
    },
    Butt_Text_2: {
        // borderWidth: 1,
        fontSize: 16,
        fontFamily: "Kanit",
        textAlign: "center",
        color: "black",
        letterSpacing: 1.5,
    },
    Butt_Box_2: {
        // borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: "#D1D6D9",
    },
    ParentImg: {
        // borderWidth: 0.5,
        marginBottom: 5,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    Logout_Img: {
        // borderWidth: 0.5,
        // borderColor: "black",
        width: 70,
        height: 70,
    },
    FirTxtParent: {
        // borderWidth: 0.5,
        paddingTop: 65,
        paddingBottom: 20,
    },
    FirTxt: {
        // borderWidth: 0.5,
        paddingVertical: 5,
        fontFamily: "HeeboExtra",
        fontSize: 25,
        letterSpacing: 1.3,
        textAlign: "center",
    },
    FirTxtParent2: {
        // borderWidth: 0.5,
        paddingVertical: 10,
    },
    FirTxt2: {
        // borderWidth: 0.5,
        paddingVertical: 10,
        fontFamily: "Kanit",
        textAlign: "center",
        fontSize: 13,
        color: "grey",
        paddingHorizontal: 35,
        letterSpacing: 0.5,
        textTransform: "capitalize",
    },
    FirImgParent: {
        // borderWidth: 0.5,
        paddingVertical: 15,
    },
    FirImg: {
        // borderWidth: 0.5,
        borderColor: "black",
        paddingVertical: 20,
        alignSelf: "center",
        width: 170,
        height: 170,
    },
    TwoBtnParent: {
        // borderWidth: 0.5,
        paddingVertical: 7,
    },
    Fir_But: {
        borderWidth: 1,
        borderColor: "#EB2F06",
        paddingVertical: 8,
        backgroundColor: "#EB2F06",
        marginHorizontal: 40,
        marginVertical: 10,
        borderRadius: 10,
    },
    Fir_But_Txt: {
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        color: "white",
        textAlign: "center",
        fontSize: 18,
        letterSpacing: 2,
    },
    Fir_But2: {
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        paddingVertical: 8,
        marginHorizontal: 40,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    Fir_But_Txt2: {
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        color: "#EB2F06",
        textAlign: "center",
        fontSize: 18,
        letterSpacing: 2,
    },
    ParentStatus: {
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        flex: 1,
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sub_ParentStatus: {
        // borderWidth: 1,
        width: "77%",
        backgroundColor: "white",
        paddingVertical: 20,
        borderRadius: 15,
    },
    ParentStatusImg: {
        // borderWidth: 1,
        paddingVertical: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    StatusImg: {
        borderWidth: 0.5,
        borderColor: "transparent",
        // borderColor: "black",
        width: 150,
        height: 150,
    },
    StatusTxt: {
        // borderWidth: 1,
        fontSize: 14,
        paddingVertical: 5,
        paddingHorizontal: 20,
        textAlign: "center",
        fontFamily: "Kanit",
        letterSpacing: 1,
        color: "grey",
    },
})

